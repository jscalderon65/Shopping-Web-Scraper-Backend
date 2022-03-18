const app = require('./server')
const debug = require('debug')('app')
const cron = require('node-cron')
const {updateWatchersInfo} = require('./Cron/watchersCron')

cron.schedule('*/5 * * * *', () => {
  updateWatchersInfo()
})

app.listen(app.get('port'), (req, res) => {
  debug('server on port: ', app.get('port'))
})
