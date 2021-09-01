const { products , carousel, categories} = require('../data/dataBase');
//const path = require('path');


module.exports = {
    home: (req,res) => {
        let productsSlider = products.filter(product => product.discount >= 5)

        res.render('home', {
            titleSlider : "Ofertas especiales",
            productsSlider,
            bannerSlides : carousel,
            categories
            
        })
    },
}