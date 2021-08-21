const express = require('express'); //requiero express
const router = express.Router()
const { climatizacion , electro , tvYSonido , heladeraYLavado} = require('../controllers/userController');

router.get('/climatizacion', climatizacion);
router.get('/electro', electro);
router.get('/tvYSonido', tvYSonido);
router.get('/heladeraYLavado', heladeraYLavado);


module.exports = router