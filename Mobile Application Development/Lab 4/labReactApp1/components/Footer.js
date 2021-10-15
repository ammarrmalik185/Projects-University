import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Footer extends React.Component{
    constructor(){
        super();
        this.state = {
            companyName: "A Interactive",
            author: "Ammar",
            copyright: "Copyright 2019"

        }
    }
    render(){
        return (
            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>
                    Author: {this.state.author}
                    <Text style={styles.footerText}>
                         | {this.state.companyName}
                        <Text style={styles.footerText}> | {this.state.copyright}</Text>
                    </Text>
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  footerContainer: {
    position: "absolute",
    justifyContent: "center",
    bottom: 0,
    height: 30,
    width: "100%",
    backgroundColor: "green"
  },
  footerText: {
    textAlign: "right",
    padding: 5
  }
});
