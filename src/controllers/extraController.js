const path = require('path');

module.exports = {
  
    enConstruccion: (req,res) => {
        res.render('product/enConstruccion')
    },  

    error: (req,res) => {
        res.render('product/error')
    },
  
}