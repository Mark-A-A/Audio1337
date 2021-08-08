import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './ReduxStore/configureStore';
import Navigation from "./Router/Navigation";

import './styles/style.scss'

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  )
}

export default App;