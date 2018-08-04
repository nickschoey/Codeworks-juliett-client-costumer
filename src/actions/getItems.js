export const getItems = (data) => ({
  type: 'GET_ITEMS',
  api: {
    endpoint: `/items`,
  }
});

export const getQuote = (data) => ({
  type: 'GET_QUOTE',
  api: {
    endopoint: '/quote'
  }
})