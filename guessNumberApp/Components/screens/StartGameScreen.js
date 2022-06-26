import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import Card from "../Card";
import Theme from "../../Constant/Theme";
import InputBox from "../Input";
import MainButton from "../mainButton";
const StartGameScreen = (props) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const [selectedNumber, setSelectedNumber] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [ButtonWidth, setButtonWidth] = useState(Dimensions.get("window").width / 4);

  useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(Dimensions.get("window").width / 4);
    };

   const sub= Dimensions.addEventListener("change", updateLayout);
    return () => {
      sub?.remove()
    };
  })

  let confirmedOutput;

  const resetInputHandler = () => {
    setEnteredNumber("");
    setConfirm(false);
    confirmedOutput = <Text> You can now pick a new Number </Text>;
  };

  const confirmInputHandler = () => {
    const ChosenNumber = parseInt(enteredNumber);
    if (isNaN(ChosenNumber) || ChosenNumber <= 0 || ChosenNumber > 99) {
      Alert.alert("Invalid Number!", "Number has to be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    setConfirm(true);
    setSelectedNumber(ChosenNumber);
    setEnteredNumber("");
    Keyboard.dismiss();
  };
  const changeEnteredNumber = (Value) => {
    setEnteredNumber(Value.replace(/[^0-9]/g, ""));
  };
  if (confirm) {
    confirmedOutput = (
      <View>
        <Text style={styles.selectedNumberStyle}>
          You have selected :
          <Text style={styles.extraboldStyle}> {selectedNumber}</Text>{" "}
        </Text>
        <MainButton
          title={"Start Game"}
          DoSomething={() => props.letsStartTheGame(selectedNumber)}
        />
      </View>
    );
  }
  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position">
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.screen}>
            <Text style={styles.textheading}>Game Screen</Text>
            <Card style={styles.inputContainer}>
              <Text style={styles.title}>Select a Number</Text>
              <InputBox
                value={enteredNumber}
                maxLength={2}
                keyboardType="numeric"
                style={styles.MyInput}
                onChangeText={changeEnteredNumber}
              />
              <View style={styles.buttonContainer}>
                <View style={{ width: ButtonWidth }}>
                  <Button
                    title="Reset"
                    onPress={resetInputHandler}
                    color={Theme.secondry}
                  />
                </View>
                <View style={{ width: ButtonWidth }}>
                  <Button
                    title="Confirm "
                    onPress={confirmInputHandler}
                    color={Theme.primary}
                  />
                </View>
              </View>
            </Card>
            {confirmedOutput}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    alignItems: "center",
    color: "black",
  },
  textheading: {
    fontSize: 30,
    color: "red",
    fontFamily: "open-sans-bold",
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    fontFamily: "open-sans-bold",
  },
  inputContainer: {
    width: "80%",
    padding: "5%",
    minWidth: 300,
    maxWidth: "95%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 10,
  },
  ButtonStyle: {
    width: Dimensions.get("window").width / 4,
  },
  MyInput: {
    width: "25%",
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
  },
  selectedNumberStyle: {
    marginVertical: 20,
    fontSize: 18,
  },
  extraboldStyle: {
    fontWeight: "bold",
    fontSize: 24,
  },
});

export default StartGameScreen;
