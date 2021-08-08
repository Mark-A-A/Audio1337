import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './ReduxStore/configureStore';
import Navigation from "./Router/Navigation";

import './styles/style.scss'

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Navigation/>
      </ConnectedRouter>
    </Provider>
  )
}

export default App;