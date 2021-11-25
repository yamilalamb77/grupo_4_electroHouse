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
    searchAdminProducts,
    searchAdminUsers,
    usersList,
userList} = require('../controllers/adminController');
let upload = require('../middlewares/uploadFiles');
let cargaProductFile = require('../middlewares/subirProductsArchivos')
let productTheValidator = require('../validations/productCreateValidator')
let uploadCategoriesFile = require('../middlewares/uploadCategoriesFiles');
let userSession = require('../middlewares/userSession')
let {categories, categoryCreate, categoryStore, categoryEdit, categoryUpdate, categoryDestroy,searchAdminCategories} = require('../controllers/adminCategoriesController')
let categoriesValidator = require('../validations/categoriesValidator') 
let {subcategories, subcategoryCreate, subcategoryStore, subcategoryEdit, subcategoryUpdate, subcategoryDestroy,searchAdminSubcategories} = require('../controllers/adminSubcategoriesController')
let subcategoriesValidator = require('../validations/subcategoriesValidator')



/* GET - Admin Dashboard */
router.get('/',userAdmin, dashboard);
/* GET - Admin products*/
router.get('/products',userAdmin, products);
/* Create Product*/
router.get('/products/create',userAdmin, productsCreate);
router.post('/products/create',userAdmin, cargaProductFile.array("image")/* , productTheValidator */,productStore);
/* Edit Product*/
router.get('/products/edit/:id',userAdmin, productEdit);
router.put('/products/edit/:id',userAdmin, cargaProductFile.array("image")/* , productTheValidator */,productUpdate);
/* Edit Product*/
router.delete('/products/delete/:id',userAdmin, productDestroy);
/*userList */
router.get('/userList', userAdmin, userList);



router.get('/usersList', userAdmin, usersList);

/******************/
/* CRUD CATEGORIES */
/******************/

/* GET - All categories*/
router.get('/categories', userSession, userAdmin,categories);

/* Create Category*/
router.get('/categories/create', userSession, userAdmin,categoryCreate);
router.post('/categories/create', uploadCategoriesFile.single('image'), categoriesValidator, categoryStore);

/* Edit Category*/
router.get('/categories/edit/:id', userSession, userAdmin,categoryEdit);
router.put('/categories/edit/:id', uploadCategoriesFile.single('image'), categoriesValidator, categoryUpdate);

/* Delete Category*/
router.delete('/categories/delete/:id', categoryDestroy);





/******************/
/* CRUD SUBCATEGORIES */
/******************/

/* GET - All subcategories*/
router.get('/subcategories', userSession, userAdmin,subcategories);

/* Create subcategory*/
router.get('/subcategories/create', userSession, userAdmin,subcategoryCreate);
router.post('/subcategories/create', upload.single('image'), subcategoriesValidator, subcategoryStore);

/* Edit subcategory*/
router.get('/subcategories/edit/:id', userSession, userAdmin,subcategoryEdit);
router.put('/subcategories/edit/:id', upload.single('image'), subcategoriesValidator, subcategoryUpdate);

/* Delete subcategory*/
router.delete('/subcategories/delete/:id', subcategoryDestroy);

/* Search Products */
router.get('/searchAdminProducts', userAdmin, searchAdminProducts)

/* Search Users*/
router.get('/searchAdminUsers', userAdmin, searchAdminUsers)

/* Search searchAdminCategories*/
router.get('/searchAdminCategories', userAdmin, searchAdminCategories)

/* Search searchAdminSubcategories*/
router.get('/searchAdminSubcategories', userAdmin, searchAdminSubcategories)






module.exports = router;


