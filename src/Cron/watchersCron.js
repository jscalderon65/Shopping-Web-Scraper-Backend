const {getCronInfo} = require('../Utils/dbOperations')
const {watcherMethods} = require('../Utils/watchersOperations')
const {setElementToDocument} = require('../Utils/dbOperations')
const {sendWatcherAlertEmail} = require('../Utils/sendGridOperations')
const debug = require('debug')('app:cron')
const debugError = require('debug')('app:cron:error')
const collection = process.env.DB_WATCHERS_COLLECTION

const updateInDbWatchersInfo = async (newWatcher, oldWatcher) => {
  const {
    priceHistory,
    actualPrice: oldActualPrice,
    userEmail,
    name,
    brand,
    url,
  } = oldWatcher
  const {actualPrice: newActualPrice} = newWatcher
  if (oldActualPrice === newActualPrice) {
    debug('Same price for: ', oldWatcher)
  } else {
    try {
      newWatcher.priceHistory = [...priceHistory, oldActualPrice]
      await setElementToDocument(
        collection,
        newWatcher.user,
        newWatcher.id,
        newWatcher,
      )
      await sendWatcherAlertEmail(
        userEmail,
        brand,
        name,
        newActualPrice,
        oldActualPrice,
        url,
      )
      debug('Updated Item:', {newWatcher, oldWatcher})
    } catch (e) {
      debugError(e)
      throw new Error(e)
    }
  }
}

const updateWatchersInfo = async () => {
  try {
    process.setMaxListeners(0)
    const method = 'UPDATE_WATCHER_INFO'
    const watchers = await getCronInfo('watchers')
    debug('Running cron task at:', new Date())
    debug('Getting users info...')
    watchers.map((oldWatcher) => {
      const watcherMethodsPayload = {
        productUrl: oldWatcher.url,
        brand: oldWatcher.brand,
        method,
        oldInfo: oldWatcher,
      }
      watcherMethods(watcherMethodsPayload).then(async (newWatcher) => {
        await updateInDbWatchersInfo(newWatcher, oldWatcher)
      })
    })
  } catch (e) {
    debugError(e)
    throw new Error(e)
  }
}
module.exports = {updateWatchersInfo}
