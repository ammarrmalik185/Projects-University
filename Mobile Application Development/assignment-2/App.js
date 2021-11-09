import React , { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

let pageEnum = {"mainPage" : 0, "gamePage" : 1, "endPage" : 2};
let randomNumber = 5;

export default function App() {

  const [page, setPage] = useState(pageEnum.mainPage);
  const [currentSelectedNumber, setCurrentSelectedNumber] = useState("")

  let getMainPage = () => {
    return (
        <View style={styles.mainPageContainer}>

          <Text style={styles.mainPageText}>Welcome to this Game</Text>
          <TouchableOpacity style={styles.defaultButton} onPress={() => setPage(pageEnum.gamePage)}>
            <Text style={styles.defaultButtonText}>Start Game</Text>
          </TouchableOpacity>
        </View>
    );
  }

  let getGamePage = () => {
    return (
        <View style={styles.gamePageMainView}>

            <View>

            </View>
            <View>

            </View>
            <View style={styles.gamePageNumberPad}>
                <View style={styles.gamePageButtonRow}>
                    <TouchableOpacity style={styles.gamePageSingleButtonContainer}><Text>7</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.gamePageSingleButtonContainer}><Text>8</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.gamePageSingleButtonContainer}><Text>9</Text></TouchableOpacity>
                </View>

                <View style={styles.gamePageButtonRow}>
                    <TouchableOpacity style={styles.gamePageSingleButtonContainer}><Text>4</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.gamePageSingleButtonContainer}><Text>5</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.gamePageSingleButtonContainer}><Text>6</Text></TouchableOpacity>
                </View>

                <View style={styles.gamePageButtonRow}>
                    <TouchableOpacity style={styles.gamePageSingleButtonContainer}><Text>1</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.gamePageSingleButtonContainer}><Text>2</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.gamePageSingleButtonContainer}><Text>3</Text></TouchableOpacity>
                </View>

                <View style={styles.gamePageButtonRow}>
                    <TouchableOpacity style={styles.gamePageSingleButtonContainer}><Text>clr</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.gamePageSingleButtonContainer}><Text>0</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.gamePageSingleButtonContainer}><Text>/</Text></TouchableOpacity>
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.defaultButton} onPress={() => setPage(pageEnum.gamePage)}>
                    <Text style={styles.defaultButtonText}>Done</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
  }

  let getEndPage = () => {
    return (
        <View>


        </View>
    );
  }

  if (page === pageEnum.mainPage)
    return getMainPage()
  else if (page === pageEnum.gamePage)
    return getGamePage()
  else if (page === pageEnum.endPage)
    return getEndPage()
}

const styles = StyleSheet.create({

    mainPageContainer:{
          width: "100%",
          height: "100%",
          alignItems:"center",
          justifyContent: "center",
    },
    mainPageText:{
          textAlign: "center",
          fontSize: 30,
          marginBottom: 40,
    },
    gamePageMainView: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    gamePageNumberPad: {

    },
    gamePageButtonRow: {
        flexDirection: "row"
    },
    gamePageSingleButtonContainer: {
        width: "25%",
        margin: 4,
        padding: 4,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: "lightblue",
        alignItems:"center",
        textAlign: "center"
    },
    defaultButton:{
        alignItems:"center",
        borderStyle: "solid",
        borderWidth: 1,
        width: "50%",
        minWidth: "50%",
        padding: 10,
        borderRadius: 10,
        backgroundColor: "lightgreen"
    },
    defaultButtonText:{

    },



});
