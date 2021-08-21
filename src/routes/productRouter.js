const express = require('express'); //requiero express
const router = express.Router()
const { climatizacion , electro , tvYSonido , heladeraYLavado} = require('../controllers/productController');

router.get('/climatizacion', climatizacion);
router.get('/electro', electro);
router.get('/tvYSonido', tvYSonido);
router.get('/heladeraYLavado', heladeraYLavado);


module.exports = router