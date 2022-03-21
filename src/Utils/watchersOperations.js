const {createProduct, updateProductInfo} = require('./crudInWatchersOperations')
const {
  getWebSiteSourceCode,
  getKoajProductInfo,
  getBershkaProductInfo,
  getAdidasProductInfo,
  getSevenAndSevenProductInfo,
} = require('./puppeteerUtils')
const {setElementToDocument} = require('./dbOperations')
const {isUrlStatusValid} = require('./errorHandlers')
const debugAppError = require('debug')('app:error')
const collection = process.env.DB_WATCHERS_COLLECTION
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
      const {user, id} = oldInfo
      oldInfo.counterAccessErrors = oldInfo.counterAccessErrors + 1
      await setElementToDocument(collection, user, id, oldInfo)
      return oldInfo
    }
  } catch (e) {
    debugAppError(e)
    throw new Error(e)
  }
}

const createWatcherInBershkaProduct = async (productUrl, userEmail) => {
  try {
    const urlValidation = await isUrlStatusValid(productUrl)
    if (urlValidation) {
      const body = await getWebSiteSourceCode(productUrl)
      const {name, actualPrice, brand} = getBershkaProductInfo(body)
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

const updateWatcherInBershkaProduct = async (productUrl, oldInfo) => {
  try {
    const urlValidation = await isUrlStatusValid(productUrl)
    if (urlValidation) {
      const body = await getWebSiteSourceCode(productUrl)
      const {actualPrice} = getBershkaProductInfo(body)
      const updatedProduct = updateProductInfo(oldInfo, actualPrice)
      return updatedProduct
    } else {
      debugAppError('Not valid url')
      const {user, id} = oldInfo
      oldInfo.counterAccessErrors = oldInfo.counterAccessErrors + 1
      await setElementToDocument(collection, user, id, oldInfo)
      return oldInfo
    }
  } catch (e) {
    debugAppError(e)
    throw new Error(e)
  }
}

const createWatcherInAdidasProduct = async (productUrl, userEmail) => {
  try {
    const urlValidation = await isUrlStatusValid(productUrl)
    if (urlValidation) {
      const body = await getWebSiteSourceCode(productUrl)
      const {name, actualPrice, brand} = getAdidasProductInfo(body)
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

const updateWatcherInAdidasProduct = async (productUrl, oldInfo) => {
  try {
    const urlValidation = await isUrlStatusValid(productUrl)
    if (urlValidation) {
      const body = await getWebSiteSourceCode(productUrl)
      const {actualPrice} = getAdidasProductInfo(body)
      const updatedProduct = updateProductInfo(oldInfo, actualPrice)
      return updatedProduct
    } else {
      debugAppError('Not valid url')
      const {user, id} = oldInfo
      oldInfo.counterAccessErrors = oldInfo.counterAccessErrors + 1
      await setElementToDocument(collection, user, id, oldInfo)
      return oldInfo
    }
  } catch (e) {
    debugAppError(e)
    throw new Error(e)
  }
}
const createWatcherInSevenAndSevenProduct = async (productUrl, userEmail) => {
  try {
    const urlValidation = await isUrlStatusValid(productUrl)
    if (urlValidation) {
      const body = await getWebSiteSourceCode(productUrl)
      const {name, actualPrice, brand} = getSevenAndSevenProductInfo(body)
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

const updateWatcherInSevenAndSevenProduct = async (productUrl, oldInfo) => {
  try {
    const urlValidation = await isUrlStatusValid(productUrl)
    if (urlValidation) {
      const body = await getWebSiteSourceCode(productUrl)
      const {actualPrice} = getAdidasProductInfo(body)
      const updatedProduct = updateProductInfo(oldInfo, actualPrice)
      return updatedProduct
    } else {
      debugAppError('Not valid url')
      const {user, id} = oldInfo
      oldInfo.counterAccessErrors = oldInfo.counterAccessErrors + 1
      await setElementToDocument(collection, user, id, oldInfo)
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
    case 'Bershka':
      if (method === 'CREATE_WATCHER') {
        const {userEmail} = payload
        return await createWatcherInBershkaProduct(productUrl, userEmail)
      } else if (method === 'UPDATE_WATCHER_INFO') {
        const {oldInfo} = payload
        return await updateWatcherInBershkaProduct(productUrl, oldInfo)
      }
    case 'Adidas':
      if (method === 'CREATE_WATCHER') {
        const {userEmail} = payload
        return await createWatcherInAdidasProduct(productUrl, userEmail)
      } else if (method === 'UPDATE_WATCHER_INFO') {
        const {oldInfo} = payload
        return await updateWatcherInAdidasProduct(productUrl, oldInfo)
      }
    case 'SevenAndSeven':
      if (method === 'CREATE_WATCHER') {
        const {userEmail} = payload
        return await createWatcherInSevenAndSevenProduct(productUrl, userEmail)
      } else if (method === 'UPDATE_WATCHER_INFO') {
        const {oldInfo} = payload
        return await updateWatcherInSevenAndSevenProduct(productUrl, oldInfo)
      }
    default:
      throw new Error('Unregistered brand')
  }
}

module.exports = {watcherMethods}
