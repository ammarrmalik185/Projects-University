import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default class NavigationButton extends React.Component{
  constructor(props){
    super(props);
  }
  render (){
    return (
      <View style={{backgroundColor: this.props.color}}>
          <Button 
            onPress={this.props.onPress} 
            title={this.props.buttonText}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
