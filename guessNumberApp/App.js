import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import StartGameScreen from "./Components/screens/StartGameScreen";
import ActualGameStartScreen from "./Components/screens/GameScreen";
import GameOverScreen from "./Components/screens/GameOver";
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';

const fetchFonts=()=>{
  return Font.loadAsync({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })
}
export default function App() {
  const [userNumber,setUserNumber]=useState();
const [numOfRounds,setNumberOfRounds]=useState(0);
const [isdataloaded, setIsdataLoaded]=useState(false);

if(!isdataloaded){
  return <AppLoading startAsync={fetchFonts} onFinish={()=>setIsdataLoaded(true)}
onError={(error)=>console. log('error',error)}/>
}

const startGameHandler=(selectedNumberUser)=>{
  setUserNumber(selectedNumberUser);
  setNumberOfRounds(0);
}
const setNumberOfRoundsHandler=num=>{
  setNumberOfRounds(num);
}
const setNewGameHandler=()=>{
  setNumberOfRounds(0)
  setUserNumber(null)
}

let Content= <StartGameScreen letsStartTheGame={startGameHandler} />
if(userNumber && numOfRounds <=0){
  Content= <ActualGameStartScreen  userChoice={userNumber} onGameOver={setNumberOfRoundsHandler}/>
}else if(numOfRounds >0){
  Content= <GameOverScreen userChoice={userNumber} NumOfTries={numOfRounds} startGameAgain={setNewGameHandler} />
}
  return (
    <View style={styles.screen}>
      <Header Title={'Glint !'}/>
      {Content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1
  }
});
