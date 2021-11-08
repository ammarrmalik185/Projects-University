import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function App() {
  const [display, setDisplay] = useState(" ")
  return (
    <View style={styles.container}>
      <View>
        {display}
      </View>
      <View style={styles.verticalAlignView}>
        <Button title="7" onPress={() => {setDisplay(display + "7")}}/>
        <Button title="8" onPress={() => {setDisplay(display + "8")}}/>
        <Button title="9" onPress={() => {setDisplay(display + "9")}}/>
      </View>
      <View style={styles.verticalAlignView}>
        <Button title="4" onPress={() => {setDisplay(display + "4")}}/>
        <Button title="5" onPress={() => {setDisplay(display + "5")}}/>
        <Button title="6" onPress={() => {setDisplay(display + "6")}}/>
      </View>
      <View style={styles.verticalAlignView}>
        <Button title="1" onPress={() => {setDisplay(display + "1")}}/>
        <Button title="2" onPress={() => {setDisplay(display + "2")}}/>
        <Button title="3" onPress={() => {setDisplay(display + "3")}}/>
      </View>
      <View style={styles.verticalAlignView}>
        <Button title="<-" onPress={() => {setDisplay(display.slice(0, display.length-1))}}/>
        <Button title="0" onPress={() => {setDisplay(display + "0")}}/>
        <Button title="clear" onPress={() => {setDisplay("")}}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    verticalAlignView: {
        flexDirection: "row"
    }
});
