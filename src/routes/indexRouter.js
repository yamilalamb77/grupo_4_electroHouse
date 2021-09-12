var express = require('express'); //requiero express
var router = express.Router()
let controller = require('../controllers/indexController');


/* Ruta para el home */
router.get('/', controller.index);
/* Ruta para terminos Y Condiciones */
router.get('/termsYConditions', controller.termsYConditions);
/* Ruta para Acerca de */
router.get('/contact', controller.contact);
/* Ruta para la búsqueda */
router.get('/search', controller.search);

router.get('/enConstruccion', controller.enConstruccion);

router.get('/error', controller.error);


module.exports = router