let db = require('../database/models')
module.exports = (req, res, next) => {
    db.Category.findAll({
        include: [{
            association: "subcategory"
        }]
    })
    .then(category => {
        res.locals.category = category
        next()
    })
}