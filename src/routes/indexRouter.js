const express = require('express'); //requiero express
const router = express.Router()
const {home} = require('../controllers/indexController');


router.get('/', home);


module.exports = router