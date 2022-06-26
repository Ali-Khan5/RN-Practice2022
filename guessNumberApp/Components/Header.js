import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Theme from "../Constant/Theme"

const  Header =props=> {
  return (
    <View style={styles.header}>
      <Text style={styles.TextHeader}>{props.Title} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:85,
        backgroundColor:Theme.primary,
        alignItems:'center',
        justifyContent:'center',
        paddingTop:30
    },
    TextHeader:{
        fontSize:28,
        color:'black',
        fontWeight:'bold'
    }
});

export default Header;