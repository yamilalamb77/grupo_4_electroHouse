const { products, categories, writeProductsJSON, users } = require('../data/dataBase');
const { validationResult } = require('express-validator')
const db = require('../database/models');
const Op = db.Sequelize.Op
const fs = require("fs");


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



      
},

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
        
    

},

searchAdminProducts: (req, res) =>{
    
    db.Products.findAll({
        where:{
            name:{[Op.like]: `%${req.query.keywords}%`}
        },
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

searchAdminUsers: (req, res) =>{
    
    db.User.findAll({
        where:{
            name:{[Op.like]: `%${req.query.keywords}%`}
        },
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
},

usersList: (req, res) => {
    db.User.findAll({
        include: [{
            association: 'address'
        }]
    })
    .then(users =>{
        res.render('admin/usersList', {
         usuario: req.session.user ? req.session.user : "",
         usuarios:users
        })
    })
    
    
}}

