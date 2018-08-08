const defaultState = { id: [], status: false };

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'POST_ORDER_REQUEST':
      return state
    case 'POST_ORDER_SUCCESS':
      return action.data
    case 'POST_ORDER_FAILURE':
      return state
    
    default:
      return state;
  }
}