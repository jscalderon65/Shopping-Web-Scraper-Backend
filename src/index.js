const app = require('./server')

app.listen(app.get('port'), (req, res) => {
  console.debug('server on port: ', app.get('port'))
})
