// CompletedScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const CompletedScreen = () => {
  const todos = useSelector(state => state.todos);
  
  if (!todos) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <View>
      <Text>Completed Todos</Text>
      {completedTodos.map((todo, index) => (
        <View key={index}>
          <Text>{todo.title}</Text>
          <Text>{todo.description}</Text>
        </View>
      ))}
    </View>
  );
};

export default CompletedScreen;
