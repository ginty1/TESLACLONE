import React from 'react';
import  { View,Text, Pressable } from 'react-native';
import styles from '../StyledButton/styles';
const StyledButton=(props)=>{

// const type=props.type;
// const content=props.content;
// const onPress=props.onPress;
       //destructering
       const {type,content,onPress}=props
const backgroundColor=type==='primary' ? '#171A20CC' :'#FFFFFFA6';
const textColor=type==='primary' ? '#FFFFFF' :'#171A20'
console.warn(type);

    return(
        <View style={styles.container}>
        <Pressable
        style={[styles.button, {backgroundColor:backgroundColor}]}
        onPress={()=>onPress()}
        >
        <Text style={[styles.text,{color:textColor}]}>{content}</Text>
        </Pressable>
        </View>
    );
};
export default StyledButton;