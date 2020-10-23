// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [placeList, setPlaceList] = useState([]);
  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>Hello React Native</Text>
      <View style={styles.inputView}>
        <TextInput
          style={{
            width: 200,
            borderBottomWidth: 1,
            borderColor: 'green',
            padding: 7
          }}
          placeholder="Add a Place..."
          value={inputValue}
          onChangeText={text => setInputValue(text)}
        />
        <Button
          title="Add"
          onPress={() => {
            if (inputValue !== '') {
              setPlaceList([
                ...placeList,
                inputValue
              ])
              setInputValue('');
            }
            else {
              alert('Please enter corect place')
            }

          }}
        />
      </View>

      {/* <StatusBar style="auto" /> */}
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
    fontSize: '34px'
  },
  inputView: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});
