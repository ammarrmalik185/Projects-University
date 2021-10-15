import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";

export default function App() {
  return (
    <View style={{height: "100%"}}>
      <Header color="blue"/>
      <NavigationBar/>
      <Text style={styles.tempContentStyle}>Content</Text>
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  tempContentStyle:{
    fontSize: 50,
    textAlign: "center",
    paddingTop: 100,
    height: "100%"
  }
});
