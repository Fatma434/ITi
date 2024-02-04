// TodoDetailsScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const TodoDetailsScreen = ({ route }) => {
  const { todo } = route.params;

  return (
    <View>
      <Text>Todo Details</Text>
      <Text>Title: {todo.title}</Text>
      <Text>Description: {todo.description}</Text>
    </View>
  );
};

export default TodoDetailsScreen;
