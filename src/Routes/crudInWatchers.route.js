const express = require('express')
const router = express.Router()
const {
  createWatcherInProduct,
  getUserWatchers,
} = require('../Services/crudInWatchers.services')

router.post('/:userId/:productBrand', createWatcherInProduct)
router.get('/:userId', getUserWatchers)
module.exports = router
