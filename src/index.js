import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/App';

// REDUX
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import apiClient from './middlewares/api';
import rootReducers from './reducers';

console.log(logger);

let store = createStore(rootReducers, applyMiddleware(apiClient, logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
    document.getElementById('root')
);
