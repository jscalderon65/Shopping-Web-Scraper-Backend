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
  registrationDate: moment().format('MM/DD/YYYY HH:mm:ss'),
})

const updateProductInfo = (
  oldInfo,
  newPrice,
  newPriceHistory,
  newproductImage = '',
) => ({
  ...oldInfo,
  priceHistory: newPriceHistory,
  actualPrice: newPrice,
  productImage: newproductImage,
})
module.exports = {createProduct, updateProductInfo}
