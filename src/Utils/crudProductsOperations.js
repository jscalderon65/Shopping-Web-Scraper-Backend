const {v4: uuidv4} = require('uuid')
const moment = require('moment')
const createProduct = (name, actualPrice, productUrl) => ({
  name,
  actualPrice,
  priceHistory: [],
  url: productUrl,
  tags: [],
  id: uuidv4(),
  registrationDate: moment().format('MM/DD/YYYY HH:mm:ss'),
})
module.exports = {createProduct}
