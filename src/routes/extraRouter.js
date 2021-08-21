const express = require('express'); //requiero express
const router = express.Router()
const {enConstruccion, error} = require('../controllers/extraController');


router.get('/enConstruccion', enConstruccion);

router.get('*', error);


module.exports = router