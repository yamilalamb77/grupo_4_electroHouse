/* de aca puedo acceder a los metodos y propiedades del data */
const { categories, users, writeUsersJSON, products, writeProductsJSON } = require('../data/dataBase')
const db = require('../database/models');
const { validationResult } = require('express-validator')
let bcrypt = require('bcryptjs')

module.exports = {
    /* Register form */
    register: (req, res) => {
        res.render('users/register', {
            categories,
            session: req.session,
            usuario : req.session.user ? req.session.user : ""
        })
    },
   
    /* Login form */
    login: (req, res) => {
        res.render('users/login', {
            categories,
            session: req.session,
            usuario : req.session.user ? req.session.user : ""
        })
    },
    /* User profile */

    
    profile: (req, res) => {
       /*  let user = users.find(user => user.id === req.session.user.id) */
        db.User.findByPk(req.session.user.id, {
            include: [{
                association: 'address'
            }]
        })
        .then(user =>{
            //res.send(user)
            console.log(user.address)
            res.render('users/userProfile', {
            categories,
            user,
            session: req.session,
            usuario : req.session.user ? req.session.user : ""
        })
        })
        
    },
    editProfile: (req, res) => {
        db.User.findByPk(req.session.user.id, {
            include: [{
                association: 'address'
            }]
        })
        .then(user =>{
            res.render('users/editProfile', {
            categories,
            user,
            session: req.session,
            usuario : req.session.user ? req.session.user : ""
        })
        })
    },
    updateProfile: (req, res) => {
        let errors = validationResult(req)

        if (errors.isEmpty()) {

            let {
                name,
                lastName,
                email,
                phone,
                street,
                number,
                postalCode,
                province,
                city,
            } = req.body


            db.User.update({
                name, 
                lastName,
                email,
                phone,
                avatar: req.file ? req.file.filename : this.avatar
            },{
            where: {
                id: req.params.id
                }
            })
            .then(() =>{
                db.Address.update({
                    street,
                    number,
                    postalCode,
                    province,
                    city,
                    userId: req.params.id
                },{
                    where: {
                        userId: req.params.id
                    }
                })
            }).then(() =>{
                    res.redirect('/users/profile')
                })

     

        } else {
            res.render('users/editProfile', {
                categories,
                errors: errors.mapped(),
                old: req.body,
                session: req.session,
                usuario : req.session.user ? req.session.user : ""
            })
        }
    },
    processLogin: (req, res) => {
        let errors = validationResult(req)

        if (errors.isEmpty()) {

            db.User.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then(user =>{
                req.session.user = {
                    id: user.id,
                    name: user.name,
                    lastName: user.lastName,
                    avatar: user.avatar,
                    rol: user.rol
                }

                if (req.body.remember) {
                    res.cookie("userElectroHouse", req.session.user, { expires: new Date(Date.now() + 900000), httpOnly: true })
                }

                res.locals.user = req.session.user

            res.redirect('/')

            })

 
        } else {
            res.render('users/login', {
                categories,
                errors: errors.mapped(),
                session: req.session,
                usuario : req.session.user ? req.session.user : ""
            })
        }
    },
    
    logout: (req, res) => {
        req.session.destroy()
        if (req.cookies.userElectroHouse){
            res.cookie('userElectroHouse', '', { maxAge: -1 })
        }

        res.redirect('/')
    },

    newRegister: (req, res) => {
        let errors = validationResult(req)

        if (errors.isEmpty()) {
        
            let {
                name,
                lastName,
                email,
                pass
            } = req.body

       
       

            db.User.create({
                name, 
                lastName,
                email,
                pass: bcrypt.hashSync(pass, 12),
                avatar: 'userimg.jpg',
                rol: 0
            })
            .then(user => {
                db.Address.create({
                    street: '',
                    city: '',
                    province: '',
                    postalCode: '',
                    number: '',
                    userId: user.id
                })
                .then(() => {
                    res.redirect('/users/login');
                })
            })
            

           

        } else {
            res.render('users/register', {
            categories,
            errors: errors.mapped(),
            old: req.body,
            usuario : req.session.user ? req.session.user : ""
        })
    }
    },
    /* ELIMINAR USUARIO */
    deleteProfile: (req, res) => {
        db.User.destroy({
            where: {
                id: req.session.user.id
            }
        })
        .then(() => {
            req.session.destroy();
            if(req.cookies.userElectroHouse){
                res.cookie('userElectroHouse','',{maxAge:-1})
            }
            
            res.redirect('/')
        })
    }

}

const dataBase = require('../data/dataBase');
const User = require('../database/models/User');
