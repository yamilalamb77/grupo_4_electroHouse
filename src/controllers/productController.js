const { products, categories } = require('../data/dataBase')
const path = require('path');

module.exports = {
    climatizacion: (req,res) => {
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
    }
    //category: (req, res) => {
        /* Busco la categoría solicitada */
     //   let category = categories.find(category => {
     //       return category.id === +req.params.id
     //   })
        /* Busco los productos que correspondan a esa categoría */
     //   let categoryProducts = products.filter(product => +product.category === +req.params.id)

        /* Busco las subcategorias que corresponden a la categoria seleccionada */ 
     //   let subCategories = [];
     //   categoryProducts.forEach(product => {
     /*       if(!subCategories.includes(product.subcategory)){
                subCategories.push(product.subcategory)
            }
        });

        res.render('user/categories', {
            category,
            products: categoryProducts,
            subCategories,
            categories
        }) 
    }*/
}