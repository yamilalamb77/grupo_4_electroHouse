const express = require('express'); //requiero express
const router = express.Router()
const{ 
    signin,
    dashboard, 
    products, 
    productsCreate, 
    productStore,
    productEdit, 
    productDestroy,
    productUpdate} = require('../controllers/adminController');

    

/* GET - Admin Signin */
router.get('/', signin);
/* GET - Admin Dashboard */
router.get('/index', dashboard);
/* GET - Admin products*/
router.get('/products', products);
/* Create Product*/
router.get('/products/create', productsCreate);
router.post('/products/create');
/* Edit Product*/
router.get('/products/edit/:id', productEdit);
router.put('/products/edit/:id');
/* Edit Product*/
router.delete('/products/delete/:id', productDestroy);


module.exports = router;


