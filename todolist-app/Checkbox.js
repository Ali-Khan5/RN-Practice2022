import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { StyleSheet } from "react-native";

import { TouchableOpacity, Text } from "react-native";

const CheckBox = ({
  selected,
  onPress,
  style,
  textStyle,
  size = 30,
  color = "#ffffff",
  text = "",
  ...props
}) => (
  <TouchableOpacity
    style={[styles.checkBox, style]}
    onPress={onPress}
    {...props}
  >
    <Icon
      size={size}
      color={color}
      name={props.showcompleted ? "check-box" : "check-box-outline-blank"}
    />
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  checkBox: {
    // flexDirection: "row",
    // alignItems: "center"
  }
});
export default CheckBox;
