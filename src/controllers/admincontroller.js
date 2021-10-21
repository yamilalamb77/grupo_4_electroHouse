const { products, categories, writeProductsJSON, users } = require('../data/dataBase');
const { validationResult } = require('express-validator')
const db = require('../database/models');


/* let subcategories = [];
products.forEach(product => {
    if(!subcategories.includes(product.subcategory)){
        subcategories.push(product.subcategory)
    }  
}); */

module.exports = {
     
    dashboard: (req, res) => {
        res.render('admin/adminIndex', {
            session: req.session,
            usuario : req.session.user ? req.session.user : ""
        })
        
    }, 
    products: (req, res) => {
        db.Products.findAll({
            include: [
                {association: "images"},
                {association: 'subcategory',  
                    include: [
                        {association: "category"}
                ]}
            ]
        })
        .then(products =>{
            res.render('admin/adminProducts', {
            products,
            session: req.session,
            usuario : req.session.user ? req.session.user : ""
        })
        })
        
    }, 
    productsCreate: (req, res) => {
        let categoriesPromise = db.Category.findAll();
        let subcategoriesPromise = db.Subcategory.findAll();

        Promise.all([categoriesPromise, subcategoriesPromise])
        .then(([categories, subcategories]) => {
            res.render('admin/adminProductCreateForm', {
                categories, 
                subcategories,
                session: req.session,
                usuario : req.session.user ? req.session.user : ""
            })
        })
        .catch((err) => console.log(err));
        
    }, 
    productStore: (req, res) => {
        let errors = validationResult(req)
        if (req.fileValidatorError) {
            let image = {
              param: "image",
              msg: req.fileValidatorError,
            };
            errors.push(image);
          }

        if(errors.isEmpty()){
            
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
            subcategory, 
            description
            } = req.body;

            db.Products.create({
                name,
                price,
                discount,
                subcategoriesId: subcategory,
                description,
              })
              .then(product => {
                  if(arrayImages.length > 0){
                      let images = arrayImages.map(image => {
                          return {
                              image: image,
                              productId: product.id
                          }
                      })
                      db.ProductImage.bulkCreate(images)
                        .then(() => res.redirect('/admin/products'))
                        .catch(err => console.log(err))
                  }
              })
        /* let newProduct = {
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

        res.redirect('/admin/products') */
    }else {
        let categoriesPromise = db.Category.findAll();
        let subcategoriesPromise = db.Subcategory.findAll();

        Promise.all([categoriesPromise, subcategoriesPromise])
        .then(([categories, subcategories]) => {
            res.render('admin/adminProductCreateForm', {
                categories, 
                subcategories,
                session: req.session,
                usuario : req.session.user ? req.session.user : ""
            })
        })
        .catch((err) => console.log(err));
    } 
},
    productEdit: (req, res) => {
        db.Products.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {association: "images"},
                {association: 'subcategory',  
                    include: [
                        {association: "category"}
                ]}
            ]
        })
        .then(product =>{
            let categoriesPromise = db.Category.findAll();
            let subcategoriesPromise = db.Subcategory.findAll();

            Promise.all([categoriesPromise, subcategoriesPromise])
            .then(([categories, subcategories]) => {
                /* res.send(product) */
                res.render('admin/adminProductEditForm', {
                    product,
                    categories, 
                    subcategories,
                    session: req.session,
                    usuario : req.session.user ? req.session.user : ""
                })
            })
        })

       /*  let product = products.find(product => product.id === +req.params.id)
        res.render('admin/adminProductEditForm', {
            categories, 
            subcategories,
            product,
            session: req.session,
            usuario : req.session.user ? req.session.user : ""
        }) */
    },
    productUpdate: (req, res) => {
        let errors = validationResult(req)
        if (req.fileValidatorError) {
            let image = {
                param: "image",
                msg: req.fileValidatorError,
            };
            errors.push(image);
        }
        if (errors.isEmpty()) {
            let arrayImages = [];
            console.log(req.files)
            if (req.files) {
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
            db.Products.update({
                name, 
                price, 
                discount, 
                category, 
                subcategory, 
                description
            },{
                where: {
                    id: req.params.id
                }
            })
            .then(() => {
                if (arrayImages.length > 0) {
                    console.log(arrayImages)
                    /* No tengo ni idea como hacer para que elimine solo las imagenes que eligen reemplazar */
                    db.ProductImage.findOne({
                        where: {
                            productId: req.params.id
                        }
                    })
                    .then(image => {
                        db.ProductImage.destroy({
                                where: {
                                    id: image.id
                                }
                            })
                        let images = arrayImages.map(image => {
                        return {
                            image: image,
                            productId: req.params.id
                            }
                        })                             
                        db.ProductImage.bulkCreate(images)
                        .then(() => res.redirect('/admin/products'))
                    })
                }
                res.redirect('/admin/products')
            })
        }



        /* let errors = validationResult(req)
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
    } */
},
    /*productDestroy: (req, res) => {
        products.forEach( product => {
            if(product.id == req.params.id){
               let productToDestroy = products.indexOf(product);
               products.splice(productToDestroy, 1)
            }
        })
        
        writeProductsJSON(products)

        res.redirect('/admin/products')
    }*/
    productDestroy : (req,res) => {
        db.ProductImage.destroy({
            where : {
                productId : req.params.id
            }
        }).then( () => {
            db.Products.destroy({
                where : {
                    id : req.params.id
                }
            }).then( () => res.redirect('/admin/products'))
            .catch(error => console.log(error))
        } )
        
    },

    userList: (req, res) => {
        db.User.findAll({
            include: [{
                association: 'address'
            }]
        })
        .then(users =>{
            res.render('admin/userList', {
             usuario: req.session.user ? req.session.user : "",
             usuarios:users
            })
        })
        
    }

}
