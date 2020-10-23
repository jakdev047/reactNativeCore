import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputPlace from './components/InputPlace/InputPlace';
import PlaceList from './components/PlaceList/PlaceList';

export default function App() {

  const [inputValue, setInputValue] = useState('');
  const [placeList, setPlaceList] = useState([]);

  return (
    <View style={styles.container}>

      <StatusBar style="auto" />

      <Text style={styles.textStyles}>Hello React Native</Text>

      <InputPlace
        inputValue={inputValue}
        setInputValue={setInputValue}
        placeList={placeList}
        setPlaceList={setPlaceList}
      />

      <PlaceList
        placeList={placeList}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyles: {
    color: 'red',
    fontSize: 34,
    marginTop: 50
  }
});
