import React, {useState} from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

export default function App() {
  const [currentData, setCurrentData] = useState({name: "", subject1Marks: 0, subject2Marks: 0 , subject3Marks: 0})
  const [allData, setAllData] = useState([])

  function getRenderObjectFromData(data, index){
    return(
        <View style={styles.singleRecordContainer}>
          <Text>Name: {data.name}</Text>
          <Text>Id: {index+1}</Text>
          <Text>Marks 1: {data.subject1Marks}</Text>
          <Text>Marks 2: {data.subject2Marks}</Text>
          <Text>Marks 3: {data.subject3Marks}</Text>
        </View>
    );
  }

  return (
      <View style={styles.mainView}>
        <View style={styles.defaultView}>
          <View style={styles.formView}>
            <Text>Student Name</Text>
            <TextInput value={currentData.name} style={styles.textInputStyle} placeholder="Enter Name" onChangeText={(text) => {
              let newData = {};
              newData.name = text
              newData.subject1Marks = currentData.subject1Marks
              newData.subject2Marks = currentData.subject2Marks
              newData.subject3Marks = currentData.subject3Marks
              setCurrentData(newData)
            }}/>

            <Text>Subject 1 Marks</Text>
            <TextInput value={currentData.subject1Marks} style={styles.textInputStyle} placeholder="Enter Marks" onChangeText={(text) => {
              newData = {};
              newData.name = currentData.name
              newData.subject1Marks = text
              newData.subject2Marks = currentData.subject2Marks
              newData.subject3Marks = currentData.subject3Marks
              setCurrentData(newData)
            }}></TextInput>

            <Text>Subject 2 Marks</Text>
            <TextInput value={currentData.subject2Marks} style={styles.textInputStyle} placeholder="Enter Marks" onChangeText={(text) => {
              newData = {};
              newData.name = currentData.name
              newData.subject1Marks = currentData.subject1Marks
              newData.subject2Marks = text
              newData.subject3Marks = currentData.subject3Marks
              setCurrentData(newData)
            }}></TextInput>

            <Text>Subject 3 Marks</Text>
            <TextInput value={currentData.subject3Marks} style={styles.textInputStyle} placeholder="Enter Marks" onChangeText={(text) => {
              newData = {};
              newData.name = currentData.name
              newData.subject1Marks = currentData.subject1Marks
              newData.subject2Marks = currentData.subject2Marks
              newData.subject3Marks = text
              setCurrentData(newData)
            }}></TextInput>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => {setAllData([])}}>
              <Text>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => {
              setAllData([...allData, currentData]);
              setCurrentData({name: "", subject1Marks: "", subject2Marks: "" , subject3Marks: ""});
            }}  disabled={currentData.name.length <= 0}>
              <Text>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={styles.scrollViewStyle}>
          {allData.map((data, index) => {return getRenderObjectFromData(data, index)})}
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  mainView:{
    justifyContent:"center",
    paddingTop: 50,
    alignItems:"center",
    width:"100%"
  },
  formView:{
    justifyContent:"center",
    alignItems:"center",
    width:"100%"
  },
  defaultView:{
    justifyContent:"center",
    width:"100%"
  },
  textInputStyle:{
    borderWidth:1,
    width:"90%"
  },
  buttonContainer:{
    flexDirection: 'row',
    justifyContent: "space-evenly"
  },
  buttonStyle:{
    margin: 5,
    alignItems:"center",
    borderWidth:1,
    backgroundColor: "blue",
    width: "30%",
    height: 30
  },
  textPromptStyle:{},
  scrollViewStyle:{
    borderWidth: 1,
    width: "100%",
    height: "100%",
    margin: 5
  },
  singleRecordContainer:{
    width:"100%",
    marginTop: 3,
    borderWidth: 1
  }
});
