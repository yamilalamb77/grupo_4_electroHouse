const express = require('express'); //requiero express
let router = express.Router()
const { productDetail, category,subcategory, shoppingCart} = require('../controllers/productController');


/* GET - detalle de productos*/
router.get('/detail/:id', productDetail)

/* GET - Lista productos de categorias */
router.get('/category/:id', category)

/* GET - List products for subcategory */
router.get('/subcategory/:id', subcategory)

/* GET - List products for shoppingCart */
router.get('/shoppingCart', shoppingCart);


module.exports = router