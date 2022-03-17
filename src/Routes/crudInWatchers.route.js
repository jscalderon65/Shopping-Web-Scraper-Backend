const express = require('express')
const router = express.Router()
const {createWatcherInProduct} = require('../Services/crudInWatchers.services')

router.post('/:userId/:productBrand', createWatcherInProduct)

module.exports = router
