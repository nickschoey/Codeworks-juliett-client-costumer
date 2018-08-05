const defaultState = {cartItems:[], price: 0};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_CART':
      return {...state,
      cartItems: [...state.cartItems, action.data],
      price: state.price + action.data.priceFiat  }

    case 'DELETE_CART':
      return {...state,
        cartItems: [...state.cartItems.filter((el, i) => i !== action.data)],
        price: state.price - state.cartItems[action.data].priceFiat
      }

    default:
      return state;
  }
}