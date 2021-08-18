const express = require('express'); //requiero express
const router = express.Router()
const controller = require('../../controllers/user/climatizacionController');

router.get('/', controller.climatizacion)

module.exports = router