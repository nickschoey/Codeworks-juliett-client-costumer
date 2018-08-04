export const getQuote = (data) => ({
  type: 'GET_QUOTE',
  api: {
    endpoint: '/quote'
  }
})