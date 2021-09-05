const { products, categories, writeProductsJSON } = require('../data/dataBase');

let subcategories = [];
products.forEach(product => {
    if(!subcategories.includes(product.subcategory)){
        subcategories.push(product.subcategory)
    }  
});

module.exports = {
    signin: (req, res) => {
        res.render('admin/adminLogin')
    },
    dashboard: (req, res) => {
        res.render('admin/adminIndex')
    }, 
    products: (req, res) => {
        res.render('admin/adminProducts', {
            products
        })
    }, 
    productsCreate: (req, res) => {
        res.render('admin/adminProductCreateForm', {
            categories, 
            subcategories
        })
    }, 
    productStore: (req, res) => {
        let lastId = 1;

        products.forEach(product => { /* aca trabajamos con el array de producto */
            if(product.id > lastId){ /* si el producto que recoriamos era mayor que lastId, le asignamos el valor de la id ese producto y se guarda en la variable */
                lastId = product.id
            }
        })

        let {
            name, 
            price, 
            discount, 
            category, 
            subcategory, 
            description 
            } = req.body; /* aca se destructura el req.body, capture los datos del req.body  .se traen los campos de nuestro formulario  */

            /* aca armo el nuevo producto */
        let newProduct = {
            id: lastId + 1, /*  */
            name,
            price,
            description,
            discount,
            category,
            subcategory,
            image: /* req.file ? [req.file.filename] :  */"default-image.png"
        };
        
        products.push(newProduct); /* le paso el producto que acabo de crear */

        writeProductsJSON(products) /* se escribe en el json el array nuevo */

        res.redirect('/admin/products') /* la que me muestra el listo de productos */
    }, 
    productEdit: (req, res) => {
        let product = products.find(product => product.id === +req.params.id)
        res.render('admin/adminProductEditForm', {
            categories, 
            subcategories,
            product
        })
    },
    productUpdate: (req, res) => {
        
        let {
            name, 
            price, 
            discount, 
            category, 
            subcategory, 
            description
            } = req.body;
        
        products.forEach( product => {
            if(product.id === +req.params.id){
                product.id = product.id,
                product.name = name,
                product.price = price,
                product.description = description,
                product.discount = discount,
                product.category = category,
                product.subcategory = subcategory,
                product.image =/*  req.file ? [req.file.filename] :  */product.image
            }
        })

        writeProductsJSON(products)

        res.redirect('admin/products')
    },
    productDestroy: (req, res) => {
        products.forEach( product => {
            if(product.id === +req.params.id){
               let productToDestroy = products.indexOf(product);
               products.splice(productToDestroy, 1)
            }
        })
        
        writeProductsJSON(products)

        res.redirect('/admin/products')
    }
}
