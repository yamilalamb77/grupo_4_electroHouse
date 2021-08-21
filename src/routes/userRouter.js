const express = require('express'); //requiero express
const router = express.Router()
const { login , register , productDetail , editProfile} = require('../controllers/userController');

router.get('/login', login);
router.get('/register', register);
router.get('/productDetail', productDetail);
router.get('/editProfile', editProfile);


module.exports = router
