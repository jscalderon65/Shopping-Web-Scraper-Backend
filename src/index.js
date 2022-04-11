const app = require('./server')
const debug = require('debug')('app')
const debugAppError = require('debug')('app:error')
const {cronHandler} = require('./Cron/cronHandler')

cronHandler()

app.listen(app.get('port'), (req, res) => {
  debug('server on port: ', app.get('port'))
  process.on('uncaughtException', (e) => {})
  process.on('unhandledRejection', (error, promise) => {
    debugAppError(
      ' Oh Lord! We forgot to handle a promise rejection here: ',
      promise,
    )
  })
})
