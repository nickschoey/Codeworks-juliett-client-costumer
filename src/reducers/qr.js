const defaultState = '';

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'QR_DATA':
      return action.data
    default:
      return state;
  }
}