const defaultState = false;

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return !state
    default:
      return state;
  }
}