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
const loginValidator = require('../validations/loginValidator')
const registerValidator = require('../validations/registerValidator')
const uploadUserAvatar = require('../middlewares/subirUserAvatar')
const userLoginCheck = require('../middlewares/userLoginCheck')



const userRegisterValidator = require('../validations/userRegisterValidator')
const userLoginValidator = require('../validations/userLoginValidator')

/* GET - Login form */
router.get('/login', login);
router.post('/login', loginValidator, userLoginValidator, processLogin);
router.get('/logout', logout);/* genera cierre de sesion */
/* GET - Register form */

router.get('/register', register);
router.post('/register', uploadUserAvatar.single('avatar'), registerValidator, processRegister, userRegisterValidator,newRegister);

/* GET - User profile */
router.get('/profile',userLoginCheck, profile)

router.get('/editProfile/:id', editProfile);
router.put('/profile/edit/:id', uploadUserAvatar.single('avatar'),updateProfile);







module.exports = router
