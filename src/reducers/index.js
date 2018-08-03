import { combineReducers } from 'redux';


const test = (state = [], action) => {

  switch (action.type) {
    case 'TEST':
      return 'test'
    default:
      return state
  }
};


const reducers = combineReducers({
  test
});

export default reducers;
