import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import MainComponent from './src/MainComponent';
import store from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/components/Login/Login';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>


  );
}

