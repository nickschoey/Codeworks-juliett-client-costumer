const defaultState = { cartItems: [], price: 0, cryptoPrice: 0 };

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.data],
        price: state.price + action.data.priceFiat,
        cryptoPrice: (parseFloat(state.cryptoPrice) + parseFloat(action.data.priceCrypto)).toFixed(6)
      }
    case 'DELETE_CART':
      return {
        ...state,
        cartItems: [...state.cartItems.filter((el, i) => i !== action.data)],
        price: parseFloat((state.price - state.cartItems[action.data].priceFiat).toFixed(1)),
        cryptoPrice: (parseFloat(state.cryptoPrice) - parseFloat(state.cartItems[action.data].priceCrypto)).toFixed(6)
      }

    default:
      return state;
  }
}
