const { products, categories } = require('../data/dataBase')

module.exports = {

    productDetail: (req,res) => {

        let productID = +req.params.id;
        
        let product = products.find(product => product.id === productID)
        let productsSlider = products.filter(item => item.category === product.category)

        res.render('productDetail', {
            titleSlider  : "Productos relacionados",
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
    shoppingCart: (req,res) => {

       /* let productID = +req.params.id;  //*aca se captura lo que viene por parametro, el mas adelante hace que el dato se transforme en un dato numerico, de string pasa a number*/
       /*  let product = products.find(product => product.id === productID)  /* guardamos en una variable el producto que me pasaron por la ruta parametrizada, que me encuentre un producto que coincida en el id. el array de productos recorre todos los productos y encuentre el producto cuyo id sea igual a productID, que es el que vino por parametro */
   /* let productsSlider = products.filter(item => item.category === product.category)  //* ese inten en su propiedad category, sea = a el producto que fue eligida*/
        res.render('product/shoppingCart')/*,{
           /*session: req.session,*/
           /* titleSlider : "Productos relacionados",
            productsSlider,
            products,
            categories
        
                    })  */   
    }
    
}