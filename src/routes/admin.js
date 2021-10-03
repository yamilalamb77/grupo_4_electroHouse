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
    productUpdate,
userList} = require('../controllers/adminController');
let cargaProductFile = require('../middlewares/subirProductsArchivos')
let productTheValidator = require('../validations/productCreateValidator')

  


/* GET - Admin Dashboard */
router.get('/',userAdmin, dashboard);
/* GET - Admin products*/
router.get('/products',userAdmin, products);
/* Create Product*/
router.get('/products/create',userAdmin, productsCreate);
router.post('/products/create',userAdmin, cargaProductFile.array("image"), productTheValidator,productStore);
/* Edit Product*/
router.get('/products/edit/:id',userAdmin, productEdit);
router.put('/products/edit/:id',userAdmin, cargaProductFile.array("image"), productTheValidator,productUpdate);
/* Edit Product*/
router.delete('/products/delete/:id',userAdmin, productDestroy);
/*userList */
router.get('/userList', userAdmin, userList);



module.exports = router;


