import React , { useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TouchableOpacityComponent, ToastAndroid} from 'react-native';

let pageEnum = {"mainPage" : 0, "gamePage" : 1, "endPage" : 2};

let maxTries = 3;

export default function App() {
  const [page, setPage] = useState(pageEnum.mainPage);
  const [currentSelectedNumber, setCurrentSelectedNumber] = useState(0);
  const [currentScore, setCurrenScore] = useState(0);
  const [currentTryCount, setCurrentTryCount] = useState(0);
  const [gamePageMessage, setGamePageMessage] = useState("");
  const [endPageMessage, setEndPageMessage] = useState("");

  let randomNumber = Math.floor(Math.random() * 10 +1);
  function reset(){
    randomNumber = Math.floor(Math.random() * 10 +1);
    setCurrentTryCount(0);
    setCurrentSelectedNumber(0);
    setGamePageMessage("");
  }

  let getMainPage = () => {
    return (
        <View style={styles.mainPageContainer}>

          <Text style={styles.mainPageText}>Welcome to the random number game</Text>
          <TouchableOpacity style={styles.defaultButton} onPress={() => setPage(pageEnum.gamePage)}>
            <Text style={styles.defaultButtonText}>Start Game</Text>
          </TouchableOpacity>
        </View>
    );
  }

  let getGamePage = () => {
    return (
        <View style={styles.gamePageMainView}>
            <View style={styles.gamePageScoreContainer}>
                <Text style={styles.defaultText}>Score: {currentScore}</Text>
                <Text style={styles.defaultText}>Selected Number: {currentSelectedNumber}</Text>
            </View>
            <View style={styles.gamePageNumberPad}>
                <View style={styles.gamePageButtonRow}>
                    <TouchableOpacity style={styles.gamePageSingleButtonContainer} onPress={() => {setCurrentSelectedNumber(7)}}><Text>7</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.gamePageSingleButtonContainer} onPress={() => {setCurrentSelectedNumber(8)}}><Text>8</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.gamePageSingleButtonContainer} onPress={() => {setCurrentSelectedNumber(9)}}><Text>9</Text></TouchableOpacity>
                </View>

                <View style={styles.gamePageButtonRow}>
                    <TouchableOpacity style={styles.gamePageSingleButtonContainer} onPress={() => {setCurrentSelectedNumber(4)}}><Text>4</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.gamePageSingleButtonContainer} onPress={() => {setCurrentSelectedNumber(5)}}><Text>5</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.gamePageSingleButtonContainer} onPress={() => {setCurrentSelectedNumber(6)}}><Text>6</Text></TouchableOpacity>
                </View>

                <View style={styles.gamePageButtonRow}>
                    <TouchableOpacity style={styles.gamePageSingleButtonContainer} onPress={() => {setCurrentSelectedNumber(1)}}><Text>1</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.gamePageSingleButtonContainer} onPress={() => {setCurrentSelectedNumber(2)}}><Text>2</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.gamePageSingleButtonContainer} onPress={() => {setCurrentSelectedNumber(3)}}><Text>3</Text></TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style={{color:"red", textAlign:"center"}}>{gamePageMessage}</Text>
                <TouchableOpacity style={styles.defaultButton} onPress={() => {
                    if (currentSelectedNumber === randomNumber){
                        let score = maxTries - currentTryCount + 1
                        setEndPageMessage("You won! " + (maxTries - currentTryCount) + " tries remaining, you got " + score + " points for that round")
                        setCurrenScore(currentScore + score);
                        setPage(pageEnum.endPage)
                    } else {
                        if (currentTryCount >= maxTries){
                            setEndPageMessage("You lost!, you got 0 points for that round")
                            setPage(pageEnum.endPage)
                        }else{
                            setGamePageMessage("Incorrect Answer, " + (maxTries - currentTryCount) + " tries left")
                            setCurrentTryCount(currentTryCount + 1)
                        }
                    }
                }}>
                    <Text style={styles.defaultButtonText}>Done</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.defaultButton} onPress={() => {
                    // i know this can go negative but this is intended
                    setCurrenScore(currentScore - 1);
                    let hint = Math.abs(currentSelectedNumber - randomNumber) + Math.floor(Math.random()*3);
                    ToastAndroid.show("You are less than " + hint + " numbers off", ToastAndroid.SHORT)
                }}>
                    <Text style={styles.defaultButtonText}>Get Hint (Score - 1)</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
  }

  let getEndPage = () => {
    return (
        <View style={styles.endGamePageMainView}>
            <View>
                <Text style={styles.defaultText}>{endPageMessage}</Text>
            </View>
            <View>
                <Text>Total Score: {currentScore}</Text>
            </View>
            <TouchableOpacity style={styles.defaultButton} onPress={() => {
                reset()
                setPage(pageEnum.gamePage)
            }}>
                <Text style={styles.defaultButtonText}>Next Round</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.defaultButton} onPress={() => {
                reset()
                setCurrenScore(0)
                setPage(pageEnum.mainPage)
            }}>
                <Text style={styles.defaultButtonText}>Go back to main menu</Text>
            </TouchableOpacity>
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
    gamePageScoreContainer: {
        height: "20%",
        paddingTop: 50

    },
    gamePageNumberPad: {
        padding: 50
    },
    gamePageButtonRow: {
        flexDirection: "row"
    },
    gamePageSingleButtonContainer: {
        width: "33%",
        margin: 4,
        padding: 4,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: "lightblue",
        alignItems:"center",
        textAlign: "center"
    },
    endGamePageMainView:{
        width: "100%",
        height: "100%",
        alignItems:"center",
        justifyContent: "center",
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
    defaultText: {
        fontSize: 20
    }



});
