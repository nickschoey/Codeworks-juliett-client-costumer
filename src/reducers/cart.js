const defaultState = {cartItems:[], price: 0};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_CART':
      return {...state,
      cartItems: [...state.cartItems, action.data],
      price: state.price + action.data.priceFiat  }

    case 'REMOVE_CART':
      return {}
      
    default:
      return state;
  }
}