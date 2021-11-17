const { carousel } = require('../data/dataBase');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require('../database/models');
const { Op } = require('sequelize')
const { validationResult } = require('express-validator')

module.exports = {
    index: (req, res) => {
        db.Products.findAll({
            where: {
                discount: {
                    [Op.gte]: 5 //sea mayor o igual a 5
                }
            },
            include: [{association: "images"}]
        })
        .then(product =>{
            res.render("index", {
                titleSlider: "Ofertas especiales",
                toThousand, 
                productSlider: product,
                bannerSlides: carousel,
                usuario: req.session.user ? req.session.user : "",
            })
        }).catch(err => console.log(err))
      

    },

    search : (req,res) => {

        db.Products.findAll({
            where : {
                [Op.or] : [
                    {
                        name :  {
                            [Op.substring] : req.query.keywords
                        }
                    },
                    {
                        description : {
                            [Op.substring] : req.query.keywords
                        }
                    }
                ]
            },
            include : [
                {association : 'images'}
            ]
        }).then(result => {
            return res.render('users/search',{
            result,
            toThousand,
            bannerSlides: carousel,
            busqueda : req.query.keywords,
            usuario: req.session.user ? req.session.user : ""
        })
            
        }).catch(error => console.log(error))

    },
    
    contact: (req, res) => {
        res.render('users/contact', { usuario: req.session.user ? req.session.user : "" })

    },
    processContact: (req, res) => {
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            
            let {
                name,
                email,
                telephone,
                website,
                affair,
                message
            } = req.body

            db.Contacts.create({
                name,
                email,
                telephone,
                website,
                affair,
                message
            }).then(() =>{
                res.redirect('/')
            })

        } else {
            res.render('users/contact', { 
                usuario: req.session.user ? req.session.user : "",
                errors: errors.mapped(),
                old: req.body
            })
        }

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