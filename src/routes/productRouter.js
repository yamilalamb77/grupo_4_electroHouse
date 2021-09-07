const express = require('express'); //requiero express
let router = express.Router()
const { productDetail, category, shoppingCart} = require('../controllers/productController');


/* GET - detalle de productos*/
router.get('/detail/:id', productDetail)


/* GET - Lista productos de categorias */
router.get('/category/:id', category)

router.get('/shoppingCart', shoppingCart);


module.exports = router