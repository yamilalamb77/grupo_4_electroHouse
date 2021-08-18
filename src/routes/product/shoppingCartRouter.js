const express = require('express'); //requiero express
const router = express.Router()
const controller = require('../../controllers/product/shoppingCartController');

router.get('/', controller.shoppingCart)

module.exports = router