const express = require('express')
const cors = require('cors')
const app = express()
const morgan = require('morgan')
const PORT = process.env.PORT || 3000

app.set('port', PORT)
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use('/', require('./Routes/example.route.js'))

module.exports = app
