import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

import GoalList from './Components/goalList';
import InputGoals from './Components/InputGoal';
export default function App() {

  const [goalsList, SetGoalsList] = useState([]);
  const [showGoalModal,setGoalModal]=useState(false)


  const addGoalHandler = (enteredGoal) => {
    console.log(enteredGoal, " our goal is that");
    SetGoalsList([
      ...goalsList,
      { id: Math.random().toString(), value: enteredGoal },
    ]);

  };
  const RemoveGoalItem=(goalID)=>{
    SetGoalsList(goalsList=>{
      return goalsList.filter((goals)=> goals.id != goalID )
    })
  }

  const changeGoalModalState=()=>{
    setGoalModal(!showGoalModal)
  }
  return (
    <View style={styles.screen}>
      <View>
        <Button title='Add New Goal' onPress={()=>{changeGoalModalState()}}/>
      </View>
     <InputGoals displayModal={showGoalModal} AddGoal={addGoalHandler} ChangeModalState={changeGoalModalState}/>

      <FlatList
        keyExtractor={(item,index)=>item.id}
        data={goalsList}
        renderItem={(itemData) =>  <GoalList itemID={itemData.item.id} item={itemData.item.value} DeleteGoal={RemoveGoalItem}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
 

});
