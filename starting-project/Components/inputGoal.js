import { StyleSheet, Text,View,TextInput ,Button} from "react-native";
import { useState } from "react";

const InputGoal = (props) => {
    const [inputGoal, SetInputGoal] = useState("");
    const inputStateHandler = (value) => {
        SetInputGoal(value);
      };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputStyling}
        placeholder="what are your goals for today? "
        value={inputGoal}
        onChangeText={inputStateHandler}
      />
      <Button title="Add Goal" onPress={()=>{
          props.addGoal(inputGoal)
          SetInputGoal("");
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyling: {
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 8,
    margin: 8,
    width: "70%",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 23,
    flex: 1,
  },
});
export default InputGoal;
