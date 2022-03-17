const moment = require('moment')
const createProduct = (name, actualPrice, productUrl) => ({
  name,
  actualPrice,
  priceHistory: [],
  url: productUrl,
  tags: [],
  registrationDate: moment().format('MM/DD/YYYY HH:mm:ss'),
})
module.exports = {createProduct}
