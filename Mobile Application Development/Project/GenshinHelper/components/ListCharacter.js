import {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import firebase from "firebase/compat"
import {Divider, List, Searchbar} from 'react-native-paper';
import {myNavigatorTheme} from '../config/theme'

firebase.initializeApp(require("../config/firebaseConfig").firebaseConfig)

export default function ListCharacterComponent({navigation, route}) {
    const [searchQuery, setSearchQuery] = useState('');
    const [data, setData] = useState([])
    const [elements, setElements] = useState({})
    const [rarities] = useState(['#8F6DA8', '#AA7A4F'])

    useEffect(async () => {
        if (data.length === 0)
            firebase.database().ref('gameData/Characters').once('value', function (snapshot) {
                let values = Object.keys(snapshot.val()).map(function (e) {
                    return snapshot.val()[e]
                })
                setData(values)
            });
        if (Object.keys(elements).length === 0)
            firebase.database().ref('gameData/Elements').once('value', function (snapshot) {
                let values = Object.keys(snapshot.val()).map(function (e) {
                    return snapshot.val()[e]
                })
                setElements(values)
            });
    })

    return (
        <View style={{flex: 1, justifyContent: 'center'}}>
            <View style={{height: '100%', borderWidth: 1}}>
                <Searchbar
                    style={{backgroundColor: myNavigatorTheme.colors.background}}
                    placeholder="Search"
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                />
                <ScrollView>
                    {data.map((e, ind) => {
                        if (e.id.includes(searchQuery.toLowerCase()))
                            return (
                                <View key={ind}>
                                    <List.Item
                                        title={e.name}
                                        description={e.description}
                                        left={props => <Image style={{
                                            height: 80,
                                            width: 80,
                                            backgroundColor: rarities[e.rarity - 4],
                                            borderRadius: 20,
                                            alignSelf: 'center'
                                        }} source={{uri: e.icon}}/>}
                                        right={props => <Image
                                            style={{height: 40, width: 40, borderRadius: 20, alignSelf: 'center'}}
                                            source={{uri: elements[e.element]}}/>}
                                        onPress={() => navigation.navigate('SingleCharacter', {
                                            data: e,
                                            element: elements[e.element]
                                        })}
                                    />
                                    <Divider/>
                                </View>
                            )
                    })
                    }
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
});
