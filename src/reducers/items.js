const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_ITEMS_SUCCESS':
      return action.data;
    default:
      return state;
  }
}
