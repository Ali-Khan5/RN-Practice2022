import { StyleSheet, Text, Pressable, View } from "react-native";

const GoalItem = (props) => {
  return (
    <Pressable
      onPress={() => {
        props.onDel(props.index)
      }}
      style={({pressed})=>pressed && styles.pressedItem}
    >
      <View>
        <Text style={styles.eachGoalItem}>{props.value}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  eachGoalItem: {
    margin: 8,
    padding: 8,
  },pressedItem:{
      opacity:0.5,
      paddingLeft:'40%',
      backgroundColor:'red'
  }
});
export default GoalItem;
