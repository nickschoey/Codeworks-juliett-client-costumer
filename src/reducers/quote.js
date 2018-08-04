const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_QUOTE_SUCCESS':
      return action.data;
    default:
      return state;
  }
}