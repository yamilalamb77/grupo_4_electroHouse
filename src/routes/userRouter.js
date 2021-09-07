const express = require('express'); //requiero express
const router = express.Router()
const { register ,
    login ,
    profile,
    processLogin,
    processRegister,
    logout,
    editProfile,
    updateProfile,
    shoppingCart, productLoading,} = require('../controllers/userController');
const loginValidator = require('../validations/loginValidator')
const registerValidator = require('../validations/registerValidator')
const uploadUserAvatar = require('../middlewares/subirUserAvatar')

/* GET - Login form */
router.get('/login', login);
router.post('/login', loginValidator, processLogin);
router.get('/logout', logout);
/* GET - Register form */
router.get('/register', register);
router.post('/register', uploadUserAvatar.single('avatar'), registerValidator, processRegister);

/* GET - User profile */
router.get('/profile', profile)

router.get('/editProfile', editProfile);
router.put('/profile/edit/:id', uploadUserAvatar.single('avatar'),updateProfile);

router.get('/productLoading', productLoading);
router.get('/shoppingCart', shoppingCart);




module.exports = router
