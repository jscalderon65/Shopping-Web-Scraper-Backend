const app = require('./server')
const debug = require('debug')('app')
const {cronHandler} = require('./Cron/cronHandler')

cronHandler()

app.listen(app.get('port'), (req, res) => {
  debug('server on port: ', app.get('port'))
})
