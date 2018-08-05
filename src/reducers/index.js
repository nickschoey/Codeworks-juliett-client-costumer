import { combineReducers } from 'redux';

import items from './items'
import quote from './quote'
import cart from './cart'

const reducers = combineReducers({
  items,
  quote,
  cart
});

export default reducers;
