const express = require('express'); //requiero express
const router = express.Router()
const { register ,
    login ,
    profile,
    processLogin,
    processRegister,
    logout,
    newRegister,
    editProfile,
    updateProfile,
 productLoading,} = require('../controllers/userController');

const uploadUserAvatar = require('../middlewares/subirUserAvatar');
const userLoginCheck = require('../middlewares/userLoginCheck');
const userLoggedCheck = require('../middlewares/userLoggedCheck');
const userRegisterValidator = require('../validations/userRegisterValidator');
const userLoginValidator = require('../validations/userLoginValidator');

/* GET - Login form */
router.get('/login',userLoggedCheck, login);
router.post('/login',  userLoginValidator, processLogin);
router.get('/logout', logout);/* genera cierre de sesion */
/* GET - Register form */

router.get('/register',userLoggedCheck, register);
router.post('/register', uploadUserAvatar.single('avatar'), userRegisterValidator,newRegister);

/* GET - User profile */
router.get('/profile',userLoginCheck, profile);
router.get('/editProfile/:id', editProfile);
router.put('/profile/edit/:id', uploadUserAvatar.single('avatar'),updateProfile);







module.exports = router
