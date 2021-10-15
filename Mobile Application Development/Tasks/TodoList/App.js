import React from 'react';
import {Text, View, FlatList, StyleSheet, TouchableOpacity, TouchableHighlight,} from "react-native";

const items = [
    {_id : 0, title : "Test", description: "Test Disc", checked: false},
    {_id : 0, title : "Test", description: "Test Disc", checked: true},
    {_id : 0, title : "Test", description: "Test Disc", checked: false},
    {_id : 0, title : "Test", description: "Test Disc", checked: false},
    {_id : 0, title : "Test", description: "Test Disc", checked: false},
    {_id : 0, title : "Test", description: "Test Disc", checked: false},
    {_id : 0, title : "Test", description: "Test Disc", checked: false},
    {_id : 0, title : "Test", description: "Test Disc", checked: false},
    {_id : 0, title : "Test", description: "Test Disc", checked: false},
    {_id : 0, title : "Test", description: "Test Disc", checked: false},
    {_id : 0, title : "Test", description: "Test Disc", checked: false},
    {_id : 0, title : "Test", description: "Test Disc", checked: false},
    {_id : 0, title : "Test", description: "Test Disc", checked: false},
    {_id : 0, title : "Test", description: "Test Disc", checked: false},
    {_id : 0, title : "Test", description: "Test Disc", checked: false},
    {_id : 0, title : "Test", description: "Test Disc", checked: false},
    {_id : 0, title : "Test", description: "Test Disc", checked: false},
    {_id : 0, title : "Test", description: "Test Disc", checked: false},
    {_id : 0, title : "Test", description: "Test Disc", checked: false},
    {_id : 0, title : "Test", description: "Test Disc", checked: false},
    {_id : 0, title : "Test", description: "Test Disc", checked: false}
]



export default function App () {
  return (
      <View style={styles.rootView}>
          <View style={styles.mainHeader.container}>
              <Text style={styles.mainHeader.text}>My Todo List App</Text>
          </View>
          <View>
            <FlatList data={items} renderItem={renderer}/>
          </View>
          <View style={styles.mainFooter.container}>
              <Text style={styles.mainFooter.text}>-Copyright??-</Text>
          </View>
          <TouchableHighlight style={styles.addTaskFAB.container} onPress={function () {}}>
              <Text style={styles.addTaskFAB.sign}>+</Text>
          </TouchableHighlight>
      </View>
  );
};

function renderer({item}) {
    return (
        <TouchableHighlight onPress={function () {item.checked = !item.checked; console.log(items)}}>
            <View style={styles.listEntry.container}>
                <View>
                </View>
                <Text style={item.checked ? styles.listEntry.titleDone : styles.listEntry.title}>{item.title}</Text>
                <Text style={styles.listEntry.description}>{item.description}</Text>
            </View>
        </TouchableHighlight>
    )
}

const colors = {
    mainBackgroundColor: '#565656',
    mainTextColor : '#fff',
    listEntryBackgroundColor: '#838383'
}

const styles = StyleSheet.create({
        rootView: {
            backgroundColor: "#c9c9c9",
            height: '100%',
            width: '100%'
        },

        mainHeader:{
            container:{
                height: 50,
                padding: 10,
                backgroundColor: colors.mainBackgroundColor,
            },
            text:{
                textAlign: 'center',
                color: colors.mainTextColor,
                fontSize: 20,
                fontWeight: 'bold'
            },
        },

        listEntry:{
            container:{
                zIndex: 1,
                margin: 1,
                backgroundColor: colors.listEntryBackgroundColor,
                borderRadius: 5,
            },
            checkboxContainer:{

            },
            title:{
                fontSize: 25,
                color: '#000000'
            },
            titleDone:{
                textDecorationLine: 'line-through',
                fontSize: 25,
                color: '#000000'
            },
            description:{

            }
        },

        mainFooter:{
            container:{
                position: 'absolute',
                width: '100%',
                bottom: 0,
                height: 20,
                padding: 5,
                backgroundColor: colors.mainBackgroundColor,
            },
            text:{
                textAlign: 'right',
                color: colors.mainTextColor,
                fontSize: 5,
            }
        },

        addTaskFAB: {
            container:{
                zIndex:10,
                position: 'absolute',
                backgroundColor: colors.mainBackgroundColor,
                borderRadius: 50,
                bottom: 40,
                right: 20,
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center'
            },
            sign:{
                zIndex:11,
                fontSize: 25,
                color: '#ffffff',
            }
        }
    }

)
