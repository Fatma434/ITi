// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import CompletedScreen from './CompletedScreen';
import TodoDetailsScreen from './TodoDetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="TodoDetails" component={TodoDetailsScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="." component={HomeStack} />
        <Tab.Screen name="Completed" component={CompletedScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
