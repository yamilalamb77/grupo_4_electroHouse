const { categories, users, writeUsersJSON } = require('../data/dataBase')
const path = require('path');

module.exports = {
    login: (req,res) => {
        res.render('user/login') ,{
            categories
        }
    },
    register: (req,res) => {
        res.render('user/register'), {
            categories
        }
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
    },
    contact: (req,res) => {
        res.render('user/contact')
    }
}