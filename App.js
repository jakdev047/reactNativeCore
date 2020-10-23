import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const handleInputChange = text => {
    alert(text)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>Hello React Native</Text>
      <TextInput 
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        placeholder="Enter Something..."
        onChangeText={text=>handleInputChange(text)}
      />
      <StatusBar style="auto" />
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
    color:'red',
    fontSize: '34px'
  }
});
