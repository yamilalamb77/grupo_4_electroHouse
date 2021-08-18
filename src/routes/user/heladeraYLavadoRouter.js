const express = require('express'); //requiero express
const router = express.Router()
const controller = require('../../controllers/user/heladeraYLavadoController');

router.get('/', controller.heladeraYLavado);


module.exports = router