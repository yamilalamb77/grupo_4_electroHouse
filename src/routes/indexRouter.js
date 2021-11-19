var express = require('express'); //requiero express
var router = express.Router()
let controller = require('../controllers/indexController');
let cookieCheck = require('../middlewares/cookieCheck');

/* Ruta para terminos Y Condiciones */
router.get('/termsYConditions', controller.termsYConditions);
/* Ruta para el home */
router.get('/', cookieCheck,controller.index);

/* Ruta para Acerca de */
router.get('/contact', controller.contact);

/* Ruta para la búsqueda */
router.get('/search', controller.search);

router.get('/error', controller.error);

module.exports = router