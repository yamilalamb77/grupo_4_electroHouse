const express = require('express'); //requiero express
const router = express.Router()
const controller = require('../../controllers/product/productLoadingController');

router.get('/', controller.productLoading)

module.exports = router 