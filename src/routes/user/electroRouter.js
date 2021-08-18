const express = require('express'); //requiero express
const router = express.Router()
const controller = require('../../controllers/user/electroController');

router.get('/', controller.electro);


module.exports = router