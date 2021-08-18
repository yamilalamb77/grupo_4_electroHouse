const express = require('express'); //requiero express
/* const app = express();   // genero instancia app
const path = require('path'); */
const router = express.Router()
const controller = require('../../controllers/product/homeController');


router.get('/', controller.home)




module.exports = router