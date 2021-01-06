import React from 'react';
import  { View,Text,ImageBackground,StyleSheet } from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton/index';

const CarItem=(props)=>{
 const {name,taggline,taglineCTA,image}=props.car;

 return(
        <View style={styles.carContainer}>
        <ImageBackground
        style={styles.image}
         source={image}
         />
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtittle}>
            {taggline}&nbsp;
            <Text style={styles.subtittleCTA}>
              {taglineCTA}
            </Text>
            </Text>
        </View>

<View style={styles.buttonStyles}>

          <StyledButton
                 type="primary"
                 content={"Custom order"}
                  onPress={()=>{
                      console.warn('Custom order Inventory was pressed');
                  }}/>

<StyledButton
     type="secondary"
     content={"Exting Inventory"}
     onPress={()=>{
     console.warn('Existing Inventory was pressed');
    }}/>
        
   </View>
</View>
    );};


export default CarItem;