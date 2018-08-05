const defaultState = {items: [], quote: 0};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_ITEMS_SUCCESS':
      return {
        ...state,
        items: action.data
      }
    case 'UPDATE_CRYPTO_SUCCESS':
    return {
    items: [...state.items.map(el => {
      el.priceCrypto = (el.priceFiat / action.data).toFixed(6);
      return el;
    })],
    quote: parseFloat(action.data.toFixed(2))
    }
    default:
      return state;
  }
}
