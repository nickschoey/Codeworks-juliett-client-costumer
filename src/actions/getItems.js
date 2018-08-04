export const getItems = (data) => ({
  type: 'GET_ITEMS',
  api: {
    endpoint: `/items`,
  }
});
