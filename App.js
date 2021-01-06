import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View} from 'react-native';
import CarList from './components/CarsList';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <CarList/>
       {/* <CarItem
       name={"Model 3"}
       taggline={"Order Online For"}
       tagglineCTA={"Touchless Delivery"}
       image={require('./assets/images/Model3.jpeg')}/> */}
<StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent: 'center',
  },
  });
