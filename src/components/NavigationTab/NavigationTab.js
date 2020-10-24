import React from 'react'
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SharePlaces from '../SharePlaces/SharePlaces';
import FindPlaces from '../FindPlaces/FindPlaces';

const Tab = createBottomTabNavigator();

const NavigationTab = () => {
    return (
        <View>
            <Tab.Navigator>
                <Tab.Screen name="Share Places" component={SharePlaces} />
                <Tab.Screen name="Find Places" component={FindPlaces} />
            </Tab.Navigator>
        </View>
    )
};

export default NavigationTab;
