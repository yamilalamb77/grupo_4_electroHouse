const express = require('express'); //requiero express
const router = express.Router()
const controller = require('../../controllers/product/editProfileController');




router.get('/', controller.editProfile)
module.exports = router