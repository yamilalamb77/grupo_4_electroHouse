const express = require('express'); //requiero express
const app = express();   // genero instancia app
const path = require('path');
const router = express.Router('../controllers/loginController');


router.get('/', controller.login)
module.exports = router