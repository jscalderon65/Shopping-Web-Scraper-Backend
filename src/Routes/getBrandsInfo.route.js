const express = require('express')
const router = express.Router()
const {getExistingBrands} = require('../Services/getBrandsInfo.services')
router.get('/', getExistingBrands)

module.exports = router
