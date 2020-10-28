import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/components/Login/Login';
import NavigationTab from './src/components/NavigationTab/NavigationTab';

const navigationRef = React.createRef();

export const navigate = (name,params) => {
  navigationRef.current && navigationRef.current.navigate(name,params);
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={NavigationTab} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>


  );
}

