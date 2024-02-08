// App.js
import React from 'react';
import AppNavigator from './navagation';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

export default function  App  () {


  return(
    <Provider store={store}>
    <AppNavigator />
     </Provider>
  )
};


