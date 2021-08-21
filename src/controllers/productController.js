const path = require('path');

module.exports = {
    climatizacion: (req,res) => {
        res.render('product/climatizacion')
    },
    electro: (req,res) => {
        res.render('product/electro')
    },
    tvYSonido: (req,res) => {
        res.render('product/tvYSonido')
    },
    heladeraYLavado: (req,res) => {
        res.render('product/heladeraYLavado')
    }
}