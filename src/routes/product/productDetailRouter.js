const express = require('express'); //requiero express
const router = express.Router()
const controller = require('../../controllers/product/productDetailController');

router.get('/', controller.productDetail)

module.exports = router

