const express = require('express'); //requiero express
const router = express.Router()
const controller = require('../../controllers/product/enConstruccionController');

router.get('/', controller.enConstruccion)

module.exports = router