const cron = require('node-cron')
const debug = require('debug')('app:cron')
const {updateWatchersInfo} = require('./watchersCron')
const NODE_ENV = process.env.NODE_ENV

const cronHandler = () => {
  if (NODE_ENV === 'production') {
    cron.schedule(process.env.CRON_STRING, () => {
      updateWatchersInfo()
    })
  } else {
    debug('NODE_ENV: ', NODE_ENV)
  }
}
module.exports = {cronHandler}
