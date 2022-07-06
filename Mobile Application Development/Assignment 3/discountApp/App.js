import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer, useFocusEffect, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from 'react-native-elements'
import {TextInput} from "react-native-web";

const Stack = createNativeStackNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(66, 147, 245)',
    card: 'rgb(40, 89, 148)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(0, 0, 0)',
    notification: 'rgb(255, 69, 58)',
  },
};

export default function App() {
  return (
      <NavigationContainer style={styles.container} theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen
              name='Home'
              component={Home}
              initialParams={{history:[]}}
              options={({ navigation, route })=>({
                headerRight:()=>(
                    <Icon color='white' size={30} onPress={()=>{
                      navigation.navigate('History', {history:route.params?.history})
                    }}
                     name={"history"}/>
                )})}/>

          <Stack.Screen
              name='History'
              component={Home}
              initialParams={{history:[]}}
              options={({ navigation, route })=>({
                headerRight:()=>(
                    <Icon name="history" color='white' size={30} onPress={()=>{
                      navigation.navigate('History', {history:route.params?.history})
                    }} />
                )})}/>

        </Stack.Navigator>
      </NavigationContainer>
  );
}


function Home(){
  return(
      <View>

          <View>
              <Text>Enter Amount: </Text>
              <TextInput />
          </View>

          <View>
              <Text>Enter Discount: </Text>
              <TextInput />
          </View>

      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 10,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    inputPrompt:{

    },
    inputField:{

    }
});
