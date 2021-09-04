/* de aca puedo acceder a los metodos y propiedades del data */
const { categories, users, writeUsersJSON, products } = require('../data/dataBase')
const path = require('path');
const dataBase = require('../data/dataBase');

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
        /* let productID = +req.params.id;  *//*aca se captura lo que viene por parametro, el mas adelante hace que el dato se transforme en un dato numerico, de string pasa a number*/
       /*  let product = products.find(product => product.id === productID)  *//* guardamos en una variable el producto que me pasaron por la ruta parametrizada, que me encuentre un producto que coincida en el id. el array de productos recorre todos los productos y encuentre el producto cuyo id sea igual a productID, que es el que vino por parametro */
/*     let productsSlider = products.filter(item => item.category === product.category)  *//* ese inten en su propiedad category, sea = a el producto que fue eligida*/
        res.render('product/shoppingCart', {
            titleSlider : "Productos relacionados",
            productsSlider: dataBase.products,
        /*  product */
                    })        
    },

    termsYConditions: (req,res) => {
        res.render('user/termsYConditions')
    },

    contact: (req,res) => {
        res.render('user/contact')
    }
}