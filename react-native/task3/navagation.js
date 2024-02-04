// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './HomeScreen';
import CompletedScreen from './CompletedScreen';
import TodoDetailsScreen from './TodoDetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ADD ToDos" component={HomeScreen} />
      <Stack.Screen name="TodoDetails" component={TodoDetailsScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack}  
         options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }} />
        <Tab.Screen name="Completed" component={CompletedScreen}
         options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="rocket" size={size} color={color} />
            ),
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
