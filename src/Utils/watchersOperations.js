const {createProduct} = require('./crudProductsOperations')
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
      throw Error('Troubles registering watcher')
    }
  } catch (error) {
    return error
  }
}

module.exports = {createWatcherInKoajProduct}
