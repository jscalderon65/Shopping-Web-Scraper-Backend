const express = require('express')
const router = express.Router()
const {
  createWatcherInProduct,
  getUserWatchers,
  updateUserWatcher,
  deleteUserWatchers,
} = require('../Services/crudInWatchers.services')

router.post('/:userId/:productBrand', createWatcherInProduct)
router.get('/:userId', getUserWatchers)
router.patch('/:userId', updateUserWatcher)
router.delete('/:userId', deleteUserWatchers)

module.exports = router
