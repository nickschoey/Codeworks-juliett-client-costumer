export const postOrder = (data) => ({
  type: 'POST_ORDER',
  api: {
    endpoint: '/order',
    method: 'POST',
    body: data
  }
})


