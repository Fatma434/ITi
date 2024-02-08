import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos', // Add the name option here
  initialState: {
    todos: [],
    completedTodos: []
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    completeTodo: (state, action) => {
      const { id } = action.payload;
      const index = state.todos.findIndex(todo => todo.id === id);
      if (index !== -1) {
        const completedTodo = state.todos.splice(index, 1)[0];
        state.completedTodos.push(completedTodo);
      }
    },
  },
});

export const { addTodo, completeTodo } = todoSlice.actions;
export default todoSlice.reducer;
