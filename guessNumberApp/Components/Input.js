import React from "react"
import { TextInput,StyleSheet } from "react-native";

const InputBox=(props)=>{
    return (
        <TextInput {...props} style={{...styles.inputBox,...props.style}}/>
    )
}

const styles=StyleSheet.create({
    inputBox:{
        borderBottomColor:'navy',
        borderBottomWidth:2,
        height:50,
        marginVertical:10
    }
})
export default InputBox;