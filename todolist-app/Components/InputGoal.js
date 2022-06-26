import React, { useState } from "react";
import { View, Button, StyleSheet, TextInput, Modal } from "react-native";

const InputGoal = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const setGoalHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  return (
    <Modal visible={props.displayModal} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={setGoalHandler}
          value={enteredGoal}
        />
        <View style={styles.sideButtons}>
          <View style={styles.buttonStyle}>
            <Button
              title="Add Goal"
              onPress={() => {
                props.AddGoal(enteredGoal);
                props.ChangeModalState();
                setEnteredGoal("");
              }}
            />
          </View>
          <View style={styles.buttonStyle}>
            <Button
              title="Cancel"
              color="red"
              onPress={() => props.ChangeModalState()}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "90%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  sideButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  buttonStyle: {
    width: "45%",
  },
});

export default InputGoal;
