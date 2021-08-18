const express = require('express'); //requiero express
const router = express.Router()
const controller = require('../../controllers/product/registerController');

router.get('/', controller.register)

module.exports = router