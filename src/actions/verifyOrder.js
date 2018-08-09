export const verifyOrder = (id) => ({
  type: 'VERIFY_ORDER',
  api: {
    endpoint: '/verify',
    method: 'POST',
    body: {id}
  }
})