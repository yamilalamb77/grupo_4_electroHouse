const express = require('express'); //requiero express
let router = express.Router()
const { productDetail, category} = require('../controllers/productController');


/* GET - detalle de productos*/
router.get('/detail/:id', productDetail)


/* GET - Lista productos de categorias */
router.get('/category/:id', category) 


module.exports = router