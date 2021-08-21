const express = require('express'); //requiero express
const router = express.Router()
const {  home } = require('../controllers/userController');


router.get('/', home);


module.exports = router