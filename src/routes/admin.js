const express = require('express'); //requiero express
const router = express.Router();
let controller = require('../controllers/admincontroller');
let userAdmin = require('../middlewares/userAdmin');


const{ 
    signin,
    dashboard, 
    products, 
    productsCreate, 
    productStore,
    productEdit, 
    productDestroy,
    productUpdate} = require('../controllers/adminController');
let cargaProductFile = require('../middlewares/subirProductsArchivos')
let productTheValidator = require('../validations/productCreateValidator')

  router.get('/admin', userAdmin, controller.admin);



/* GET - Admin Signin */
router.get('/', signin );
/* GET - Admin Dashboard */
router.get('/index', dashboard);
/* GET - Admin products*/
router.get('/products', products);
/* Create Product*/
router.get('/products/create', productsCreate);
router.post('/products/create', cargaProductFile.array("images"), productTheValidator,productStore);
/* Edit Product*/
router.get('/products/edit/:id', productEdit);
router.put('/products/edit/:id', cargaProductFile.array("images"), productTheValidator,productUpdate);
/* Edit Product*/
router.delete('/products/delete/:id', productDestroy);


module.exports = router;


