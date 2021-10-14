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
                postalCode
            } = req.body

            db.User.update({
                name, 
                lastName,
                email,
                phone,
                avatar: req.file ? req.file.filename : req.session.user.avatar
            },{
            where: {
                id: req.params.id
                }
            })
            .then(() =>{
                db.Address.create({
                    street,
                    number,
                    postalCode,
                    userId: req.params.id
                })
                .then(() =>{
                    res.redirect('/users/profile')
                })
            })

            /* let user = users.find(user => user.id === +req.params.id)

            let {
                name,
                last_name,
                tel,
                address,
                pc,
                province,
                city
            } = req.body

            user.name = name
            user.last_name = last_name
            user.tel = tel
            user.address = address
            user.pc = pc
            user.province = province
            user.city = city
            user.avatar = req.file ? req.file.filename : user.avatar

            writeUsersJSON(users)

            delete user.pass

            req.session.user = user

            res.redirect('/users/profile') */

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

           /*  let user = users.find(user => user.email === req.body.email)

            req.session.user = {
                id: user.id,
                name: user.name,
                last_name: user.last_name,
                email: user.email,
                avatar: user.avatar,
                rol: user.rol
            }

            if (req.body.remember) {
                res.cookie("userElectroHouse", req.session.user, { expires: new Date(Date.now() + 900000), httpOnly: true })
            }

            res.locals.user = req.session.user

            res.redirect('/') */
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
            .then(() =>{
                res.redirect('/users/login')
            })

            /* let newRegisterUser = {
                id: lastId + 1,
                name,
                last_name,
                email,
                pass: bcrypt.hashSync(pass1, 10),
                addPhoto: req.file ? req.file.filename : "default-image.png", 
                rol: "ROL_USER",
                tel: "",
                address: "",
                pc: "",
                province: "",
                city: ""

            }
            users.push(newRegisterUser)
            writeUsersJSON(users)
            res.redirect('/users/login') */


        } else {
            res.render('users/register', {
            categories,
            errors: errors.mapped(),
            old: req.body,
            usuario : req.session.user ? req.session.user : ""
        })
    }
    }

}

const dataBase = require('../data/dataBase');
const User = require('../database/models/User');
