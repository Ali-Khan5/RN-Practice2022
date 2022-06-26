import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import CheckBox from "./Checkbox";
class App extends React.Component {
  state = {
    currentTask: {
      value: "",
      isCompleted: false,
    },
    taskArr: [],
    termsAccepted: false,
  };
  addTask = () => {
    let val = this.state.taskArr;
    val.push(this.state.currentTask);
    this.setState({
      taskArr: val,
      currentTask: { value: "", isCompleted: false },
    });
  };
  onChangeInput = (keyEvent) => {
    console.log("rrruinging", keyEvent);
    this.setState({ currentTask: { value: keyEvent, isCompleted: false } });
  };
  handleCheckBox = (index) => {
    let switchIscompleted = this.state.taskArr;
    switchIscompleted[index].isCompleted =
      !switchIscompleted[index].isCompleted;
    this.setState({ taskArr: switchIscompleted });
  };
  clearEverything = () => {
    this.setState({ taskArr: [] });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            padding: 5,
            color: "#FFFFFF",
            marginTop: 50,
          }}
        >
          Tasks
        </Text>
        <View>
          <TextInput
            placeholder="what is your main focus for today ?"
            placeholderTextColor="#FFFFFF"
            value={this.state.currentTask.value}
            style={{
              color: "#FFFFFF",
              marginTop: 50,
              width: 250,
              padding: 10,
              marginBottom: 20,
              borderBottomColor: "#FFFFFF",
              borderBottomWidth: 1,
            }}
            onChangeText={this.onChangeInput}
          />

          <Button
            title="Add Task"
            onPress={this.addTask}
            style={{ marginTop: 12 }}
          />
        </View>
        <View>
          <ScrollView
            contentContainerStyle={{
              borderStyle: "solid",
              borderWidth: 2,
              borderColor: "#ffffff",
            }}
          >
            {this.state.taskArr
              ? this.state.taskArr.map((x, i) => {
                  return (
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                      }}
                    >
                      <CheckBox
                        key={i}
                        selected={this.state.termsAccepted}
                        onPress={() => this.handleCheckBox(i)}
                        index={i}
                        showcompleted={x.isCompleted}
                      />
                      {x.isCompleted ? (
                        <Text
                          style={{
                            color: "#FFFFFF",
                            fontSize: 25,

                            // margin: 10,
                            textDecorationLine: "line-through",
                          }}
                        >
                          {x.value}
                        </Text>
                      ) : (
                        <Text style={{ color: "#FFFFFF", fontSize: 25 }}>
                          {x.value}
                        </Text>
                      )}
                      <Button
                        title="delete"
                        style={{
                          alignSelf: "flex-end",
                        }}
                      />
                    </View>
                  );
                })
              : null}
          </ScrollView>
        </View>
        <Button title="clear all task" onPress={this.clearEverything} />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
    color: "#FFFFFF",
    paddingTop: Constants.statusBarHeight,
  },
});

export default App;
