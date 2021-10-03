const { products, categories, writeProductsJSON, users } = require('../data/dataBase');
const { validationResult } = require('express-validator')

let subcategories = [];
products.forEach(product => {
    if(!subcategories.includes(product.subcategory)){
        subcategories.push(product.subcategory)
    }  
});

module.exports = {
   
    
    dashboard: (req, res) => {
        res.render('admin/adminIndex', {
            session: req.session,
            usuario : req.session.user ? req.session.user : ""
        })
        
    }, 
    products: (req, res) => {
        res.render('admin/adminProducts', {
            products,
            session: req.session,
            usuario : req.session.user ? req.session.user : ""
        })
    }, 
    productsCreate: (req, res) => {
        res.render('admin/adminProductCreateForm', {
            categories, 
            subcategories,
            session: req.session,
            usuario : req.session.user ? req.session.user : ""
        })
    }, 
    productStore: (req, res) => {
        let errors = validationResult(req)

        if(errors.isEmpty()){
            let lastId = 1;

        products.forEach(product => {
            if(product.id > lastId){
                lastId = product.id
            }
        })

        let arrayImages = [];
        if(req.files){
            req.files.forEach(image => {
                arrayImages.push(image.filename)
            })
        }

        let {
            name, 
            price, 
            discount, 
            category, 
            subcategory, 
            description
            } = req.body;

        let newProduct = {
            id: lastId + 1,
            name,
            price,
            description,
            discount,
            category,
            subcategory,
            image: arrayImages.length > 0 ? arrayImages : "userimg.jpg"
        };
        
        products.push(newProduct);

        writeProductsJSON(products)

        res.redirect('/admin/products')
    }else {
        res.render('admin/adminProductCreateForm', {
            subcategories,
            categories,
            errors: errors.mapped(),
            old: req.body,
            session: req.session,
            usuario : req.session.user ? req.session.user : ""
        })
    } 
},
    productEdit: (req, res) => {
        let product = products.find(product => product.id === +req.params.id)
        res.render('admin/adminProductEditForm', {
            categories, 
            subcategories,
            product,
            session: req.session,
            usuario : req.session.user ? req.session.user : ""
        })
    },
    productUpdate: (req, res) => {
        let errors = validationResult(req)

        if(errors.isEmpty()) {

        let arrayImages = [];
        if(req.files){
            req.files.forEach(image => {
                arrayImages.push(image.filename)
            })
        }
        
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
                product.image = req.file ? [req.file.filename] : product.image
      /*           console.log(product) */
            }
        })
        writeProductsJSON(products)


        res.redirect('/admin/products')
    }else {
        res.render('admin/adminProductEditForm', {
            subcategories,
            categories,
            errors: errors.mapped(),
            old: req.body,
            session: req.session,
            usuario : req.session.user ? req.session.user : ""
        })
    }
},
    productDestroy: (req, res) => {
        products.forEach( product => {
            if(product.id == req.params.id){
               let productToDestroy = products.indexOf(product);
               products.splice(productToDestroy, 1)
            }
        })
        
        writeProductsJSON(products)

        res.redirect('/admin/products')
    },

    userList: (req, res) => {
        res.render('admin/userList', {
             usuario: req.session.user ? req.session.user : "",
             usuarios:users
            })
    }

}
