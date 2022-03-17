const app = require('./server')
const debug = require('debug')('app')
app.listen(app.get('port'), (req, res) => {
  debug('server on port: ', app.get('port'))
})
