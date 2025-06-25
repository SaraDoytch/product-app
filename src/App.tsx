import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/Store'
import { RouterProvider } from 'react-router';
import router from './router/router';

function App() {
  return (
    <Provider store={store}>
<RouterProvider router={router} />   </Provider>
  );
}

export default App;
