const express = require('express'); //requiero express
const router = express.Router()
const { login ,termsYConditions, register , shoppingCart, productDetail , productLoading, editProfile, contact} = require('../controllers/userController');

router.get('/login', login);
router.get('/register', register);
router.get('/productDetail', productDetail);
router.get('/productLoading', productLoading);
router.get('/editProfile', editProfile);
router.get('/shoppingCart', shoppingCart);
router.get('/termsYConditions', termsYConditions);
router.get('/contact', contact);


module.exports = router
