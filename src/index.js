import React from "react";
import ReactDOM from "react-dom";
import App from './components/App/App';

// REDUX
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
//import apiClient from './middlewares/api';
import rootReducers from './reducers';

let store = createStore(rootReducers, applyMiddleware(logger))

ReactDOM.render(
  <Provider store={store}>
    	<App />
  </Provider>,
    document.getElementById('root')
);
