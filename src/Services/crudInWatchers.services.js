const {setElementToDocument} = require('../Utils/dbOperations')
const {createWatcherInKoajProduct} = require('../Utils/watchersOperations')
const {v4: uuidv4} = require('uuid')
const debugAppError = require('debug')('app:error')
const createWatcherInProduct = async (req, res) => {
  try {
    const {userId, productBrand} = req.params
    const {productUrl} = req.body
    const IdWatcher = uuidv4()
    const newProduct = await createWatcherInKoajProduct(productUrl)
    await setElementToDocument(userId, productBrand, IdWatcher, newProduct)
    res.send({[IdWatcher]: newProduct})
  } catch (e) {
    res.send(500, {error: e.message})
    debugAppError(e)
  }
}
module.exports = {createWatcherInProduct}
