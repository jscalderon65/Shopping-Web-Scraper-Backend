const debugAppError = require('debug')('app:error')
const {createProduct} = require('./crudInWatchersOperations')
const {getWebSiteSourceCode, getKoajProductInfo} = require('./puppeteerUtils')
const {isUrlStatusValid} = require('./errorHandlers')
const createWatcherInKoajProduct = async (productUrl) => {
  try {
    const urlValidation = await isUrlStatusValid(productUrl)
    if (urlValidation) {
      const body = await getWebSiteSourceCode(productUrl)
      const {name, actualPrice} = getKoajProductInfo(body)
      const newProduct = createProduct(name, actualPrice, productUrl)
      return newProduct
    } else {
      throw new Error('Troubles registering watcher')
    }
  } catch (e) {
    debugAppError(e)
    throw new Error(e)
  }
}

module.exports = {createWatcherInKoajProduct}
