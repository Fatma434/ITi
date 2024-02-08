// screens/TodoFormScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { completeTodo } from '../Redux/slices/todo.slice'; // Corrected import

const TodoFormScreen = ({ todo }) => { // Assuming you receive todo object as props
  const dispatch = useDispatch();

  const handleCompleteTodo = () => {
    dispatch(completeTodo(todo)); // Pass todo object to completeTodo action
  };

  return (
    <View>
      <Text>Todo Form Screen</Text>
      <Button title="Complete Todo" onPress={handleCompleteTodo} />
    </View>
  );
};

export default TodoFormScreen;