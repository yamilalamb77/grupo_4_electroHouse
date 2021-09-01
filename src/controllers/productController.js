
const path = require('path');

module.exports = {
    climatizacion: (req,res) => {
        res.render('user/climatizacion')
    },
    electro: (req,res) => {
        res.render('user/electro')
    },
    tvYSonido: (req,res) => {
        res.render('user/tvYSonido')
    },
    heladeraYLavado: (req,res) => {
        res.render('user/heladeraYLavado')
    }
}