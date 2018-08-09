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
        id: action.data,
        waiting: true,
        paid: false
      }
    case 'POST_ORDER_FAILURE':
      return {
        ...state,
      waiting: false,
      paid: false
    }


    case 'VERIFY_ORDER_REQUEST':
      return {
        ...state,
        waiting: true,
        paid: false
      }
    case 'VERIFY_ORDER_SUCCESS':
      return {
        ...state,
        waiting: false,
        paid: true
      }
    case 'VERIFY_ORDER_FAILURE':
      return {
        ...state,
        waiting: true,
        paid: false
      }
    
    default:
      return state;
  }
}