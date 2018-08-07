import { combineReducers } from 'redux';

import items from './items'
import cart from './cart'
import modal from './modal'
import qr from './qr'

const reducers = combineReducers({
  items,
  cart,
  modal,
  qr
});

export default reducers;
