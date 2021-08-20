const express = require('express'); //requiero express
const router = express.Router()
const controller = require('../../controllers/product/errorController');




router.get('/', controller.error)
module.exports = router