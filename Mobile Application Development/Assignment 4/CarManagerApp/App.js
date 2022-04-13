import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
    const Screens = {ManageCars: "Manage Cars", ManageCarBrands: "Manage Car Brands"}
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name={Screens.ManageCars} component={ManageCars} />
          <Drawer.Screen name={Screens.ManageCarBrands} component={ManageCarBrands} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
}

function ManageCars(){
    const Screens = {AllCars: "All Cars", AddCar: "Add Car", SingleCar: "Single Car View"}
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={Screens.AllCars} component={AllCars}/>
                <Stack.Screen name={Screens.AddCar} component={AddCar}/>
                <Stack.Screen name={Screens.SingleCar} component={SingleCar}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function AllCars( { navigation } ){
    return(
        <DataList></DataList>
    )
}

function AddCar(){
    return(
        <View></View>
    )
}
function SingleCar(){

}

function ManageCarBrands(){
    return(
        <></>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
