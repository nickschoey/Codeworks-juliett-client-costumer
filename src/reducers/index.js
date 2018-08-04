import { combineReducers } from 'redux';

import items from './items'
import quote from './quote'

const reducers = combineReducers({
  items,
  quote
});

export default reducers;
