import { combineReducers } from 'redux';

import items from './items'
import cart from './cart'
import modal from './modal'

const reducers = combineReducers({
  items,
  cart,
  modal
});

export default reducers;
