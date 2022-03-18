const {getCronInfo} = require('../Utils/dbOperations')
const {watcherMethods} = require('../Utils/watchersOperations')
const {setElementToDocument} = require('../Utils/dbOperations')
const debug = require('debug')('app:cron')
const debugError = require('debug')('app:cron:error')
const collection = 'watchers'

const updateInDbWatchersInfo = async (newWatcher, oldWatcher) => {
  const {priceHistory, actualPrice: oldActualPrice} = oldWatcher
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
      watcherMethods(oldWatcher.url, oldWatcher.brand, method, oldWatcher).then(
        async (newWatcher) => {
          await updateInDbWatchersInfo(newWatcher, oldWatcher)
        },
      )
    })
  } catch (e) {
    debugError(e)
    throw new Error(e)
  }
}
updateWatchersInfo()
module.exports = {updateWatchersInfo}
