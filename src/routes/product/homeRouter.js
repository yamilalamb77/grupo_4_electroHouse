const express = require('express'); //requiero express
const router = express.Router()
const controller = require('../../controllers/product/homeController');

router.get('/', controller.home)

module.exports = router 