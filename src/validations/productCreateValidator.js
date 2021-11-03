let { check, body } = require('express-validator');

module.exports = [
    body('name')
    .custom((value)=>{
        regexName = /^[a-zA-Z]{2,}*$/
        return regexName.test(value)
    })
    .withMessage('Introduzca un nombre valido'),

    check("category")
    .notEmpty()
    .withMessage("Debes elegir una categoría")
    .isNumeric()
    .isInt({
        min: 1,
        max: 4
    })
    .withMessage("La categoria seleccionada no existe"),

    check('subcategory')
    .notEmpty()
    .withMessage('Debes elegir una subcategoría')
    .isNumeric()
    .isInt({
        min: 1,
        max: 7
    })
    .withMessage("La subcategoria seleccionada no existe"),
   

    check('price')
    .notEmpty()
    .withMessage('Coloca un precio')
    .isNumeric()
    .withMessage("Solo puedes ingresar números"),

    check('discount')
    .isNumeric()
    .withMessage("Solo puedes ingresar números")
    .isInt({
        min: 0,
        max: 100
    })
    .withMessage("Introduzca un valor entero entre 0 y 100"),


    body('description')
    .notEmpty()
    .withMessage('debes escribir unas descripcion').bail()
    .custom((value)=>{
        regexDescription = /^[\w\s]*$/
        return regexDescription.test(value)

    })
    .withMessage('Introduzca una descripcion valida'),




]