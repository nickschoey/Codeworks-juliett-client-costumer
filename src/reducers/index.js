import { combineReducers } from 'redux';

import items from './items'
import cart from './cart'
import modal from './modal'
import qr from './qr'
import order from './order'

const reducers = combineReducers({
  items,
  cart,
  modal,
  qr,
  order
});

export default reducers;
