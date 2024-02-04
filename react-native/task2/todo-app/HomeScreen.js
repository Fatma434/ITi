import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList ,TouchableOpacity} from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTodo = () => {
    if (title.trim() !== '' && description.trim() !== '') {
      setTodos([...todos, { title, description }]);
      setTitle('');
      setDescription('');
    }
  };

  const handleTodoPress = (todo) => {
    navigation.navigate('TodoDetails', { todo });
  };

  return (
    <View>
      <TextInput 
      style={{ height:20 , padding:20, borderWidth: 1, borderColor: 'gray', borderRadius: 5 ,margin:10}}
        placeholder="Enter title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
      style={{ height:20 , padding:20, borderWidth: 1, borderColor: 'gray', borderRadius: 5 ,margin:10}}
        placeholder="Enter description"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <Button title="Add" onPress={handleAddTodo} />
      <FlatList
        data={todos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleTodoPress(item)}>
          <View style={{ height:100 , alignItems:"center", padding:20, borderWidth: 1, borderColor: 'gray', borderRadius: 5 ,margin:10}}>
       
         
          <Text>Title: {item.title}</Text>
          
          <Text>Description: {item.description}</Text>
         
              
        </View>
         </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;
