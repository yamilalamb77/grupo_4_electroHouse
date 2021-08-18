const express = require('express'); //requiero express
const router = express.Router()
const controller = require('../../controllers/user/tvYSonidoController');

router.get('/', controller.tvYSonido);


module.exports = router