var express = require('express'); //requiero express
var router = express.Router()
let controller = require('../controllers/indexController');



/* GET - Home */
router.get('/', controller.index)

module.exports = router