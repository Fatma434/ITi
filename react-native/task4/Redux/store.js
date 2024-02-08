// Importing necessary modules
import { configureStore } from '@reduxjs/toolkit';
import todoSlice from "./slices/todo.slice";

// Defining a reducer for completed todos
const completedTodosReducer = (state = [], action) => {
    switch (action.type) {
      case 'todos/completeTodo':
        return [...state, action.payload];
      default:
        return state;
    }
};

// Configuring the Redux store
export const store =  configureStore({
    reducer: {
        todo: todoSlice.reducer, // Reducer for todo
        completedTodos: completedTodosReducer, // Reducer for completed todos
    },
});
