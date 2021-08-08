import { createStore, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [
  thunk
];

export default function configureStore() {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/reactjs/redux/releases/tag/v3.1.0
  const store = createStore(rootReducer,  composeWithDevTools(
    applyMiddleware(thunk),
    // other store enhancers if any
  ));

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('./reducers', () =>
      store.replaceReducer(
        require('./reducers') /*.default if you use Babel 6+ */
      )
    );
  }

  return store;
}