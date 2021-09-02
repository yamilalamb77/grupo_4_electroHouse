const { products, categories } = require('../data/dataBase')
/*const path = require('path');*/

module.exports = {
    /*climatizacion: (req,res) => {
        res.render('user/climatizacion')
    },
    electro: (req,res) => {
        res.render('user/electro')
    },
    tvYSonido: (req,res) => {
        res.render('user/tvYSonido')
    },
    heladeraYLavado: (req,res) => {
        res.render('user/heladeraYLavado')
    }*/
    productDetail: (req,res) => {

        let productID = +req.params.id;
        
        let product = products.find(product => product.id === productID)
        let productsSlider = products.filter(item => item.category === product.category)

        res.render('user/productDetail', {
            sliderTitle : "Productos relacionados",
            productsSlider,
            product,
            categories
        })
    
},
    category: (req, res) => {
        /* Busco la categoría solicitada */
        let category = categories.find(category => {
            return category.id === +req.params.id
        })
        /* Busco los productos que correspondan a esa categoría */
       let categoryProducts = products.filter(product => +product.category === +req.params.id)

        /* Busco las subcategorias que corresponden a la categoria seleccionada */ 
        let subCategories = [];
       categoryProducts.forEach(product => {
           if(!subCategories.includes(product.subcategory)){
                subCategories.push(product.subcategory)
            }
        });

        res.render('categories', {
            category,
            products: categoryProducts,
            subCategories,
            categories
        }) 
    }
}