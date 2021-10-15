import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Header extends React.Component{
  constructor(){
    super();
    this.state = {
      mainTitle: "Hello World",
      subTitle: "wow hello world subtitle",
      endTitle: "wow hello world endtitle"
    }
  }
  render (){
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{this.state.mainTitle}</Text>
        <Text style={styles.headerTextSmall}>{this.state.subTitle}</Text>
        <Text style={styles.headerTextSmall}>{this.state.endTitle}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: 5,
    alignItems : "center",
    justifyContent: "center",
    height: 90,
    width: "100%",
    backgroundColor: "green"
  },
  headerText: {
    fontSize: 30
  },
  headerTextSmall: {
    fontSize: 15
  }
});
