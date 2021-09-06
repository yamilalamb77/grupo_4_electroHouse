const { admin } = require("../controllers/adminController");

module.exports= function(req, res, next){
    if (req.query.user == "yami" || req.query.user == "vilma" || req.query.user == "lucho" ) {
        next()
    } else {
        res.send("No sos admin")
        
    }

}