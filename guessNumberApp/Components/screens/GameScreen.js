import React, { useState, useRef,useEffect} from "react";
import { StyleSheet, View, Button, Keyboard, Text, Alert } from "react-native";
import Card from "../Card";
const GenerateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const randoNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randoNumber === exclude) {
    return GenerateRandomNumber(min, max, exclude);
  } else {
    return randoNumber;
  }
};
const GameScreen = (props) => {
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
 const [rounds,setRounds]=useState(0);
 const {userChoice,onGameOver}=props;

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "higher" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Dont Lie!!!", "we detected cheating", [
        { text: "I am Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextGuess = GenerateRandomNumber(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextGuess);
    setRounds(rounds=>rounds+1);
  };
  const [currentGuess, setCurrentGuess] = useState(
    GenerateRandomNumber(1, 100, props.userChoice)
  );
 useEffect(()=>{
   if(currentGuess===props.userChoice){
     props.onGameOver(rounds)
   }
 },[currentGuess,userChoice,onGameOver])
  
  return (
    <View style={styles.screen}>
      <Text style={styles.textStyle}>Opponents Guess is </Text>
      <Text style={styles.guessStyle}> {currentGuess}</Text>
      <Card style={styles.buttonContainer}>
        <Button
          title={"Lower"}
          color={"navy"}
          onPress={() => {
            nextGuessHandler("lower");
          }}
        />
        <Button
          title={"Higher"}
          color={"orange"}
          onPress={() => {
            nextGuessHandler("higher");
          }}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    
  },
  textStyle: {
    fontSize: 25,
    fontStyle: "italic",
  },
  guessStyle: {
    fontWeight: "bold",
    borderColor: "purple",
    borderStyle: "solid",
    borderWidth: 5,
    fontSize: 28,
    padding: 10,
    marginVertical: 10,
    color: "purple",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    minWidth: 300,
    width:'80%',
    maxWidth: "80%",
    padding: 20,
  },
});

export default GameScreen;
