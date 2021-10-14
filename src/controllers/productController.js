const { products, categories } = require('../data/dataBase');
const db = require('../database/models');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {

    productDetail: (req,res) => {
        db.Products.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {association: "images"},
                {association: 'subcategory'}
            ]
        })
        .then(product =>{
            db.Products.findAll({
                where: {
                    subcategoriesId: product.subcategoriesId
                },
                include: [
                    {association: "images"},
                    {association: 'subcategory'}
                ] 
            })
            .then(products =>{
                res.render('productDetail', {
                titleSlider  : "Productos relacionados",
                productSlider: products,
                toThousand,
                product,
                categories,
                usuario : req.session.user ? req.session.user : ""
            })
            })
            
        })

        /* let productID = +req.params.id;
        
        let product = products.find(product => product.id === productID)
        let productsSlider = products.filter(item => item.category === product.category)

        res.render('productDetail', {
            titleSlider  : "Productos relacionados",
            productsSlider,
            toThousand,
            product,
            categories,
            usuario : req.session.user ? req.session.user : ""
        }) */
    
},

    category: (req, res) => {
        
        db.Category.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {association: 'subcategory', 
                    include: [
                        {association: 'product', 
                            include: [
                            {association: "images"}
                    ]}
                ]}
            ]
        })
        .then(category =>{
            let subCategories = category.subcategory
            let products = []
            subCategories.forEach(subcategory => {
                subcategory.product.forEach(product => products.push(product))
            });
            res.render('categories', {
                category,
                products,
                toThousand,
                subCategories,
                usuario : req.session.user ? req.session.user : ""
            }) 
        })

        /* let category = categories.find(category => {
            return category.id === +req.params.id
        })
        
       let categoryProducts = products.filter(product => +product.category === +req.params.id)

        let subCategories = [];
       categoryProducts.forEach(product => {
           if(!subCategories.includes(product.subcategory)){
                subCategories.push(product.subcategory)
            }
        });

        res.render('categories', {
            category,
            toThousand,
            products: categoryProducts,
            subCategories,
            categories,
            usuario : req.session.user ? req.session.user : ""
        })  */
    },
    shoppingCart: (req,res) => {

       /* let productID = +req.params.id;  //*aca se captura lo que viene por parametro, el mas adelante hace que el dato se transforme en un dato numerico, de string pasa a number*/
       /*  let product = products.find(product => product.id === productID)  /* guardamos en una variable el producto que me pasaron por la ruta parametrizada, que me encuentre un producto que coincida en el id. el array de productos recorre todos los productos y encuentre el producto cuyo id sea igual a productID, que es el que vino por parametro */
   /* let productsSlider = products.filter(item => item.category === product.category)  //* ese inten en su propiedad category, sea = a el producto que fue eligida*/
        res.render('product/shoppingCart',{  usuario : req.session.user ? req.session.user : ""})/*,{
           /*session: req.session,*/
           /* titleSlider : "Productos relacionados",
            productsSlider,
            products,
            categories
        
                    })  */   
    }
    
}