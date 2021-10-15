import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NavigationButton from "./NavigationButton";

export default class NavigationBar extends React.Component{
  constructor(){
    super();
  }
  render (){
    let delay = 3;
    return (
      <View style={styles.bar}>
            <NavigationButton 
                onPress={() => {console.log("home clicked")}} 
                buttonText="Home"
                delay={delay}
                metaData={{
                    id : 1,
                    refLink: "none"
                }}
                color="green"
            />
            <NavigationButton
                onPress={() => {console.log("about clicked")}} 
                buttonText="About"
                delay={delay}
                metaData={{
                    id : 1,
                    refLink: "none"
                }}
                color="green"
            />
            <NavigationButton
                onPress={() => {console.log("info clicked")}} 
                buttonText="Info"
                delay={delay}
                metaData={{
                    id : 1,
                    refLink: "none"
                }}
                color="green"
            />
            <NavigationButton
                onPress={() => {console.log("details clicked")}} 
                buttonText="More Details"
                delay={delay}
                metaData={{
                    id : 1,
                    refLink: "none"
                }}
                color="green"
            />
            <NavigationButton
                onPress={() => {console.log("web clicked")}} 
                buttonText="Open in Web"
                delay={delay}
                metaData={{
                    id : 1,
                    refLink: "none"
                }}
                color="green"
            />  
      </View>
    );
  }
}

const styles = StyleSheet.create({
    bar:{
        flexDirection: "row", 
        justifyContent: "center",
        backgroundColor: "skyblue"
    }
});
