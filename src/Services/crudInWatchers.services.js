const {
  setElementToDocument,
  getElementsFromDocument,
} = require('../Utils/dbOperations')
const {createWatcher} = require('../Utils/watchersOperations')
const {v4: uuidv4} = require('uuid')
const debugAppError = require('debug')('app:error')
const collectionId = 'watchers'
const createWatcherInProduct = async (req, res) => {
  try {
    const {userId, productBrand} = req.params
    const {productUrl} = req.body
    const IdWatcher = uuidv4()
    const newProduct = await createWatcher(productBrand, productUrl)
    await setElementToDocument(collectionId, userId, IdWatcher, newProduct)
    res.send({[IdWatcher]: newProduct})
  } catch (e) {
    res.status(500).send({error: e.message})
    debugAppError(e)
  }
}
const getUserWatchers = async (req, res) => {
  try {
    const {userId} = req.params
    const data = await getElementsFromDocument(collectionId, userId)
    res.send(data)
  } catch (e) {
    res.status(500).send({error: e.message})
    debugAppError(e)
  }
}
module.exports = {createWatcherInProduct, getUserWatchers}
