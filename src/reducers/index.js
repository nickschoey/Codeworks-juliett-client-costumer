import { combineReducers } from 'redux';

import items from './items'
import cart from './cart'

const reducers = combineReducers({
  items,
  cart
});

export default reducers;
