const defaultState = { id: [], waiting: false, paid: false };

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'POST_ORDER_REQUEST':
      return {
        ...state,
        waiting: true,
        paid: false
      }
    case 'POST_ORDER_SUCCESS':
      return {
        ...state,
        waiting: false,
        paid: true
      }
    case 'POST_ORDER_FAILURE':
      return state
    
    default:
      return state;
  }
}