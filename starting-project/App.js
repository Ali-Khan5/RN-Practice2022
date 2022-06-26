// import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import GoalItem from "./Components/goalItem";
import InputGoal from "./Components/inputGoal";
export default function App() {
  const [listOfGoal, setListOfGoals] = useState([]);


  const addGoalHandler = (GOAL) => {
    // console.log(inputGoal);
    setListOfGoals((currentGoals) => [
      ...currentGoals,
      { text: GOAL, key: Math.random().toString() },
    ]);
    
  };
  const deleteGoalHandler=(index)=>{
    let newArr=listOfGoal.filter(val=>{
      if(val.key !== index )return val;
    })
    setListOfGoals(newArr)
  }
  return (
    <View style={styles.container}>
      <InputGoal  addGoal={addGoalHandler} />
      <View style={styles.goalsStyle}>
        <FlatList
          data={listOfGoal}
          renderItem={(itemData) => {
            return <GoalItem value={itemData.item.text} index={itemData.item.key} onDel={deleteGoalHandler}/>;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: 50,
    paddingHorizontal: 16,
    // justifyContent:'center',
    flex: 1,
  },

  goalsStyle: {
    flex: 5,
  },
});
