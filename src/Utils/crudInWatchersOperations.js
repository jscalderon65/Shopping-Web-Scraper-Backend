const moment = require('moment')
const createProduct = (productUrl, name, actualPrice, productImage = '') => ({
  name,
  actualPrice,
  priceHistory: [],
  url: productUrl,
  productImage,
  tags: [],
  registrationDate: moment().format('MM/DD/YYYY HH:mm:ss'),
})
module.exports = {createProduct}
