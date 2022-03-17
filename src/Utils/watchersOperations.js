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
      const newProduct = createProduct(productUrl, name, actualPrice)
      return newProduct
    } else {
      throw new Error('Troubles registering watcher')
    }
  } catch (e) {
    debugAppError(e)
    throw new Error(e)
  }
}

const createWatcher = async (brand, productUrl) => {
  switch (brand) {
    case 'Koaj':
      return await createWatcherInKoajProduct(productUrl)
    default:
      throw new Error('Unregistered brand')
  }
}

module.exports = {createWatcher}
