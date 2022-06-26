import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import MainButton from "../mainButton"
const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Image
          style={{width:300,height:300,borderRadius:10}}
        //   source={require('../../assets/success.png')}
        source={{uri:'https://media.istockphoto.com/photos/monochrome-image-of-the-matterhorn-switzerland-xxxl-picture-id451530401?k=20&m=451530401&s=170667a&w=0&h=oYxGOJ_bGDcymzNBkc-kaxZPp5XRTwVok4mQLQMW-9g='}}
          resizeMode="cover"
        />
        <Text style={styles.HeadingtextStyle}> The Game is Over</Text>
        <Text style={styles.textStyle}>

          It took the Bot <Text style={styles.boldtext}>
              {props.NumOfTries} </Text>tries to Guess
        </Text>
        <Text style={styles.textStyle}> The Number was  <Text style={styles.boldtext}>
            {props.userChoice}</Text>
            </Text>
        <MainButton DoSomething={props.startGameAgain} title="NEW GAME" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  HeadingtextStyle: {
    fontWeight: "bold",
    fontSize: 26,
    color: "white",
  },
  textStyle: {
    fontSize: 26,
    textAlign:'center',
    color: "yellow",
  },
  boldtext:{
      fontSize:28,
      fontWeight:'900',
      color:'orange'

  }
  ,
  container: {
    backgroundColor: "purple",
    borderRadius: 10,
    padding: 15,
    color: "white",
    alignItems: "center",
  },
});

export default GameOver;
