import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';

const GoalList=props=>{
    return(
        <TouchableOpacity onPress={()=>{props.DeleteGoal(props.itemID)}}>
          <View style={styles.listItemStyle}>
            <Text style={{ color: "#FFFFFF" }}>{props.item}</Text>
          </View>          
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    
    listItemStyle: {
      padding: 10,
      marginBottom: 5,
      marginTop: 5,
      backgroundColor: "black",
    },
})

export default GoalList;