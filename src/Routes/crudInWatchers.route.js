const express = require('express')
const router = express.Router()
const {
  createWatcherInProduct,
  getUserWatchers,
  deleteUserWatchers,
} = require('../Services/crudInWatchers.services')

router.post('/:userId/:productBrand', createWatcherInProduct)
router.get('/:userId', getUserWatchers)
router.delete('/:userId', deleteUserWatchers)

module.exports = router
