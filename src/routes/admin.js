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
    productUpdate} = require('../controllers/admincontroller');

    

/* GET - Admin Signin la que tiene el logueo*/
router.get('/', signin);

/* GET - Admin Dashboard- puede ser index vista home del admin, se puede mostrar resumen, cuantos usuarios logueados hay, base de productos, se puede hacer grafico, numeros de los productos  */
router.get('/index', dashboard);
/* GET - Admin products- la que lista los productos*/
router.get('/products', products);

/* Create Product -  creacion de productos*/
router.get('/products/create', productsCreate);/* muestra el formulario */
router.post('/products/create', productStore);/* envio el formulario para poder guardarlo */
/* Edit Product*/
router.get('/products/edit/:id', productEdit);
router.put('/products/edit/:id', productUpdate);
/* Edit Product*/
router.delete('/products/delete/:id', productDestroy);


module.exports = router;


