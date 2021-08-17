const express = require('express'); //requiero express
/* const app = express();   // genero instancia app
const path = require('path'); */
const router = express.Router()
const controller = require('../../controllers/product/loginController');


router.get('/', controller.login)

module.exports = router