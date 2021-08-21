const express = require('express'); //requiero express
const router = express.Router()
const {  error , enConstruccion} = require('../controllers/userController');


router.get('/enConstruccion', enConstruccion);
router.get('/error', error);


module.exports = router