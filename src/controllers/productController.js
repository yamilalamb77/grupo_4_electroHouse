const db = require('../database/models');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {

    productDetail: (req,res) => {
        db.Products.findOne({
            where: {
                id: +req.params.id
            },
            include: [
                {association: "images"},
                
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
                usuario : req.session.user ? req.session.user : ""
            })
            })
            
        })
    
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

    },

    
    subcategory: (req, res) => {
        db.Subcategory.findByPk(req.params.id, {
          include: [
            {
              association: "product",
              include: [
                {
                  association: "images",
                },
              ],
            },
          ],
        })
          .then((subcategory) => {
            db.Category.findByPk(subcategory.categoriesId, {
              include: [{ association: "subcategory" }],
            }).then((category) =>
              res.render('subcategory', {
                category,
                product: subcategory.product,
                usuario : req.session.user ? req.session.user : "",
              })
            );
          })
          .catch((err) => console.log(err));
      },
      
    shoppingCart: (req,res) => {

        res.render('product/shoppingCart',{  usuario : req.session.user ? req.session.user : ""})   
    }
    
}