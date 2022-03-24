const moment = require('moment')
const createProduct = (
  productUrl,
  name,
  actualPrice,
  brand,
  userEmail,
  productImage = '',
) => ({
  name,
  actualPrice,
  priceHistory: [],
  url: productUrl,
  productImage,
  brand,
  tags: [],
  userEmail,
  counterAccessErrors: 0,
  registrationDate: moment().format('MM/DD/YYYY HH:mm:ss'),
})

const updateProductInfo = (oldInfo, newPrice, newPriceHistory) => ({
  ...oldInfo,
  priceHistory: newPriceHistory,
  actualPrice: newPrice,
})
module.exports = {createProduct, updateProductInfo}
