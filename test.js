const arrObject =
  [{
    price: 2,
    name: 'Jordi'
  },
  {
    price: 3,
    name: 'John'
  }]

const a = arrObject.map(el => {
  el.priceMy = el.price / 2
  return el
})
//