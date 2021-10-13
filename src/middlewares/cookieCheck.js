module.exports = function (req, res, next) {
    if(req.cookies.userElectroHouse){
        req.session.user = req.cookies.userElectroHouse
        res.locals.user = req.session.user
    }
    next()
}