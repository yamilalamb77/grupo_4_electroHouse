const { products, categories } = require('../data/dataBase')

module.exports = {

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
    },
    
}