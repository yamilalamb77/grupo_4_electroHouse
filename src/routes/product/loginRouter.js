const express = require('express'); //requiero express
const router = express.Router()
const controller = require('../../controllers/product/loginController');

router.get('/', controller.login)

module.exports = router