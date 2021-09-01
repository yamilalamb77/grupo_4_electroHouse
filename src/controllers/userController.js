let { products } = require('../data/dataBase')
const path = require('path');

module.exports = {
    login: (req,res) => {
        res.render('user/login')
    },
    register: (req,res) => {
        res.render('user/register')
    },
    productDetail: (req,res) => {

            let productID = +req.params.id;
            
            let product = products.find(product => product.id === productID)
            let sliderProducts = products.filter(item => item.category === product.category)
    
            res.render('user/productDetail', {
                sliderTitle : "Productos relacionados",
                sliderProducts,
                product,
                categories
            })
        
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