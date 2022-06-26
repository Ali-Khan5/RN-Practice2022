import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Theme from "../Constant/Theme";

const MainButton = (props) => {
  return (
    <TouchableOpacity onPress={props.DoSomething}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: Theme.primary,
    paddingVertical: 12,
    paddingHorizontal: 50,
  },
  buttonText: {
    color: 'black',
    fontSize:18
  },
});

export default MainButton;
