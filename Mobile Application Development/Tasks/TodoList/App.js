import React, {useState} from 'react';
import {Text, View, FlatList, StyleSheet} from "react-native";



const items = [
    {_id : 0, title : "Test", description: "Test Disc"}
]



export default function App () {
  return (
      <View>
          <View style={styles.mainHeader.mainHeaderContainer}>
            <Text style={styles.mainHeader.mainHeaderText}>My Todo List</Text>
          </View>
          <View>
              <FlatList data={items} renderItem={renderer}/>
          </View>
      </View>
  );
};

function renderer({item}) {
    return (
        <Text>{item.title}</Text>
    )
}

const styles = StyleSheet.create({
        mainHeader:{
            mainHeaderContainer:{
                height: 80,
                paddingTop: 40,
                background: 'coral',
            },
            mainHeaderText:{
                textAlign: 'center',
                color: '#fff',
                fontSize: 20,
                fontWeight: 'bold'
            }
        },
    }
)
