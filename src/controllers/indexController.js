const { carousel, categories } = require('../data/dataBase');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require('../database/models');
const { Op } = require('sequelize')


module.exports = {
    index: (req, res) => {
        db.Product.findAll({
            where: {
                discount: {
                    [Op.gte]:5 //sea mayor o igual a 5
                }
            },
            include: [{
                association : 'images'
            }]
        })
        .then(products =>{
            res.render('index', {
                titleSlider: "Ofertas especiales",
                toThousand,
                productSlider: products,
                bannerSlides: carousel,
                /* categories, */
                usuario: req.session.user ? req.session.user : ""
            })
        })
       /*let productsSlider = products.filter(product => product.discount >= 5)
 
 
            console.log(req.session.user) 
            res.render('index', {
            titleSlider: "Ofertas especiales",
            toThousand,
            productsSlider,
            bannerSlides: carousel,
            categories,
            usuario: req.session.user ? req.session.user : ""
        }) */
    },
    search: (req, res) => {
        let result = []
        products.forEach(product => {
            if (product.name.toLowerCase().includes(req.query.keywords.toLowerCase())) {
                result.push(product)
            }
        });
        res.render('users/search', {
            result,
            toThousand,
            search: req.query.keywords,
            usuario: req.session.user ? req.session.user : ""
        })
    },

    contact: (req, res) => {
        res.render('users/contact', { usuario: req.session.user ? req.session.user : "" })

    },
    enConstruccion: (req, res) => {
        res.render('product/enConstruccion', { usuario: req.session.user ? req.session.user : "" })
    },
    termsYConditions: (req, res) => {
        res.render('termsYConditions', { usuario: req.session.user ? req.session.user : "" })
    },
    error: (req, res) => {
        res.render('product/error')
    }


}