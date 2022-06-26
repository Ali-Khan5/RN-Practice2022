import React from "react";
import {View,StyleSheet} from "react-native";

const Card=(props)=>{
    return(
        <View style={{...styles.Card,...props.style}}>
            {props.children}
        </View>
    )
}

const styles=StyleSheet.create({
    Card:{
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowRadius:10,
        shadowOpacity:0.26,
        elevation:10,
        backgroundColor:'white',
        borderRadius:15 
    }
})

export default Card;