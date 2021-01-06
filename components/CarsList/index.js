import React from 'react';
import { View,FlatList } from 'react-native';
import styles from './styles';
import cars from './cars';
import CarItem from '.././CarItem/index';
const CarList=(props)=>{
    return(
        <View style={styles.container}>
            <FlatList
            data={cars}
            renderItem={({item})=> <CarItem  car={item}/>}
            snapToAlignment={'fast'}
            decelerationRate={'fast'}
            showsVerticalScrollIndicator={false}
            //snapToInterval={Dimensions.get('Window').height}
            
            />
        </View>
    )
}

export default CarList;