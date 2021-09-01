const express = require('express'); //requiero express
const router = express.Router()
const { category,climatizacion , electro , tvYSonido , heladeraYLavado} = require('../controllers/productController');

router.get('/climatizacion', climatizacion);
router.get('/electro', electro);
router.get('/tvYSonido', tvYSonido);
router.get('/heladeraYLavado', heladeraYLavado);
/* GET - List products for category */
/*router.get('/category/:id', category) */


module.exports = router