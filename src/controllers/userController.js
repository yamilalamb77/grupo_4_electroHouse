const path = require('path');

module.exports = {
    login: (req,res) => {
        res.render('user/login')
    },
    register: (req,res) => {
        res.render('user/register')
    },
    productDetail: (req,res) => {
        res.render('user/productDetail')
    },
    editProfile: (req,res) => {
        res.render('user/editProfile')
    }
}