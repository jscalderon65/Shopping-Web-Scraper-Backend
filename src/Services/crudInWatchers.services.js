const {
  setElementToDocument,
  getElementsFromDocument,
  DeleteElementInDocument,
} = require('../Utils/dbOperations')
const {watcherMethods} = require('../Utils/watchersOperations')
const {v4: uuidv4} = require('uuid')
const debugAppError = require('debug')('app:error')
const collectionId = 'watchers'
const createWatcherInProduct = async (req, res) => {
  try {
    const {userId, productBrand} = req.params
    const {productUrl} = req.body
    const method = 'CREATE_WATCHER'
    const IdWatcher = uuidv4()
    const newProduct = await watcherMethods(productUrl, productBrand, method)
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

const deleteUserWatchers = async (req, res) => {
  try {
    const {userId} = req.params
    const {productId} = req.body
    const response = await DeleteElementInDocument(
      collectionId,
      userId,
      productId,
    )
    res.send(response)
  } catch (e) {
    res.status(500).send({error: e.message})
    debugAppError(e)
  }
}
module.exports = {createWatcherInProduct, getUserWatchers, deleteUserWatchers}
