const express = require('express'); //requiero express
const router = express.Router()
const { login , register , shoppingCart, productDetail , productLoading, editProfile} = require('../controllers/userController');

router.get('/login', login);
router.get('/register', register);
router.get('/productDetail', productDetail);
router.get('/productLoading', productLoading);
router.get('/editProfile', editProfile);
router.get('/shoppingCart', shoppingCart);


module.exports = router
