const { check, body } = require('express-validator')
const { users } = require('../data/dataBase')

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('Debe ingresar su nombre'),

    check('last_name')
    .notEmpty()
    .withMessage('Debe ingresar su apellido'),

    check('email')
    .notEmpty()
    .withMessage('Debe escribir su email').bail()
    .isEmail()
    .withMessage('Debe escribir su email válido'),

    body('email')
    .custom(value => {
        let user = users.find(user => user.email === value)

        if(user !== undefined){
            return true
        }else{
            return false
        }
    })
    .withMessage("Email ya registrado"),

    check('pass1')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña')
    .isLength({
        min: 4,
        max:16
})
    .withMessage('La contraseña debe tener como mínimo 6 caracteres y maximo 16'),

    body('pass2') /* validacion custom, compara las contraseñas */
    .custom((value, {req}) => value !== req.body.pass1 ? false : true)/*  */
    .withMessage('Las contraseñas no coinciden'),

    check('terms')
    .isString('on')/* valida que sea un string que tenga valor on */
    .withMessage('Debes aceptar los términos y condiciones')
]