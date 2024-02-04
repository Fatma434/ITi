import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, useWindowDimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Dimensions } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(null); // New state to manage selected index

  const { width, height } = useWindowDimensions();



  const handleAddTodo = () => {
    const todoExists = todos.some((todo) => todo.title === title && todo.description === description);

    if (!todoExists && title.trim() !== '' && description.trim() !== '') {
      // Todo doesn't exist, add it
      setTodos([...todos, { title, description, completed: false }]);
      setTitle('');
      setDescription('');
    } else {
      alert('Todo is already exists or Title/description is empty!');
    }
  };

  useEffect(() => {
    console.log(width, height);
  });

  const handleCompleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = true;
    setTodos(updatedTodos);
    alert('Todo is complete ✔🐱‍🚀');
    setSelectedIndex(null); // Reset selected index
  };

  const handleTodoPress = (index) => {
    setSelectedIndex(index);
  };
  const handleDelete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    setSelectedIndex(null); // Reset selected index
  };
  return (
    <View>
      <TextInput
        style={{ height: 20, padding: 20, borderWidth: 1, borderColor: 'gray', borderRadius: 5, margin: 10  }}
        placeholder="Enter title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={{ height: 20, padding: 20, borderWidth: 1, borderColor: 'gray', borderRadius: 5, margin: 10 }}
        placeholder="Enter description"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <TouchableOpacity
        onPress={() => handleAddTodo()}
        style={{
          width: 100, color: "white", alignItems: "center", backgroundColor: "green", height: 38, borderWidth: 1, borderColor: 'gray', borderRadius: 5, marginLeft: 190
        }}>
        <Text style={{ color: "white" ,fontSize:20}}>ADD</Text>
      </TouchableOpacity>

      <FlatList
        data={todos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => handleTodoPress(index)}>
            <View style={{
              flexDirection: 'row', height: height * 0.2, padding: 20, borderWidth: 1, borderColor: 'gray', borderRadius: 5, margin: 10,
              backgroundColor: selectedIndex === index ? 'lightblue' : 'white'
            }}>
              <Text>Title: {item.title}</Text>
              <Text>Description: {item.description}</Text>
              <TouchableOpacity onPress={() => handleDelete(index)} style={{ marginLeft: 140 }}>
                <Icon name="delete" size={25} color="red" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleCompleteTodo(index)} style={{ marginLeft: 10 }}>
  <FontAwesome name="check-square" size={25} color="green" style={{ marginRight: 10 }} />
</TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;
