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
let uploadProductFile = require('../middlewares/subirProductsArchivos')


  router.get('/admin', userAdmin, controller.admin);



/* GET - Admin Signin */
router.get('/', signin );
/* GET - Admin Dashboard */
router.get('/index', dashboard);
/* GET - Admin products*/
router.get('/products', products);
/* Create Product*/
router.get('/products/create', productsCreate);
router.post('/products/create', uploadProductFile.single("image"), productStore);
/* Edit Product*/
router.get('/products/edit/:id', productEdit);
router.put('/products/edit/:id', uploadProductFile.single("image"), productUpdate);
/* Edit Product*/
router.delete('/products/delete/:id', productDestroy);


module.exports = router;


