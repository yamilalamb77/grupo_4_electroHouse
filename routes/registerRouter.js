const express = require('express'); //requiero express
const app = express();   // genero instancia app
const path = require('path');
const router = express.Router('../controllers/registerController');




router.get('/', controller.register)
module.exports = router