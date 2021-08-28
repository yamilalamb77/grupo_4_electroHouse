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
    productLoading: (req,res) => {
        res.render('product/productLoading')
    },
    editProfile: (req,res) => {
        res.render('user/editProfile')
    },
    shoppingCart: (req,res) => {
        res.render('product/shoppingCart')
    },
    termsYConditions: (req,res) => {
        res.render('user/termsYConditions')
    }
}