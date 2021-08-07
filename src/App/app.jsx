import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './ReduxStore/configureStore';
import Navigation from "./Router/Navigation";

import './styles/style.scss'

const audio = {
  episodes: {
    fetching: null,
    error: null,
    list: [],
  }
}
const initialState = { audio }; 
const store = configureStore(initialState);

const App = () => {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  )
}

export default App;