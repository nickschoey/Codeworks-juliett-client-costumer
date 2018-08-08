const defaultState = {items: [], quote: 0};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_ITEMS_SUCCESS':
      return {
        ...state,
        categories: action.data.reduce((acc, el) => {
          if (acc.hasOwnProperty(el.category)) {
            acc[el.category].push(el)
          } else {
            acc[el.category] = [];
            acc[el.category].push(el)
          }
          return acc;
        }, {}),
        items: action.data

      }
    case 'UPDATE_CRYPTO_SUCCESS':
    // return {
    // items: [...state.items.map(el => {
    //   el.priceCrypto = (el.priceFiat / action.data).toFixed(6);
    //   return el;
    // })],
    // quote: parseFloat(action.data.toFixed(2))
    // }
    return state;
    default:
      return state;
  }
}
