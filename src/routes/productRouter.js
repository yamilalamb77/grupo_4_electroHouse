const express = require('express'); //requiero express
let router = express.Router()
const { productDetail, category,climatizacion , electro , tvYSonido , heladeraYLavado} = require('../controllers/productController');

/*router.get('/climatizacion', climatizacion);
router.get('/electro', electro);
router.get('/tvYSonido', tvYSonido);
router.get('/heladeraYLavado', heladeraYLavado);*/

/* GET - Product Detail */
router.get('/detail/:id', productDetail)
/* GET - List products for category */
router.get('/category/:id', category) 


module.exports = router