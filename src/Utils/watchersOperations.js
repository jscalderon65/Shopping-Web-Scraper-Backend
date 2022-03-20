const {createProduct, updateProductInfo} = require('./crudInWatchersOperations')
const {getWebSiteSourceCode, getKoajProductInfo} = require('./puppeteerUtils')
const {isUrlStatusValid} = require('./errorHandlers')
const debugAppError = require('debug')('app:error')

const createWatcherInKoajProduct = async (productUrl, userEmail) => {
  try {
    const urlValidation = await isUrlStatusValid(productUrl)
    if (urlValidation) {
      const body = await getWebSiteSourceCode(productUrl)
      const {name, actualPrice, brand} = getKoajProductInfo(body)
      const newProduct = createProduct(
        productUrl,
        name,
        actualPrice,
        brand,
        userEmail,
      )
      return newProduct
    } else {
      throw new Error('Troubles registering watcher')
    }
  } catch (e) {
    debugAppError(e)
    throw new Error(e)
  }
}

const updateWatcherInKoajProduct = async (productUrl, oldInfo) => {
  try {
    const urlValidation = await isUrlStatusValid(productUrl)
    if (urlValidation) {
      const body = await getWebSiteSourceCode(productUrl)
      const {actualPrice} = getKoajProductInfo(body)
      const updatedProduct = updateProductInfo(oldInfo, actualPrice)
      return updatedProduct
    } else {
      debugAppError('Not valid url')
      return oldInfo
    }
  } catch (e) {
    debugAppError(e)
    throw new Error(e)
  }
}

const watcherMethods = async (payload) => {
  const {productUrl, brand, method} = payload
  switch (brand) {
    case 'Koaj':
      if (method === 'CREATE_WATCHER') {
        const {userEmail} = payload
        return await createWatcherInKoajProduct(productUrl, userEmail)
      } else if (method === 'UPDATE_WATCHER_INFO') {
        const {oldInfo} = payload
        return await updateWatcherInKoajProduct(productUrl, oldInfo)
      }
    default:
      throw new Error('Unregistered brand')
  }
}

module.exports = {watcherMethods}
