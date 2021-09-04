const { products , carousel, categories} = require('../data/dataBase');
//const path = require('path');


module.exports = {
    index: (req,res) => {
        let productsSlider = products.filter(product => product.discount >= 5)

        res.render('index', {
            titleSlider : "Ofertas especiales",
            productsSlider,
            bannerSlides : carousel,
            categories
            
        })
    },

}