let db = require('../../database/models')

module.exports = {
    allCategories: (req, res)=>{
        db.Category.findAll({
            include: [{association: "subcategory"}]
        })
        .then(categories => {
            res.status(200).json({
                meta: {
                    status: 200,
                    total: categories.length
                },
                data: categories
            })
        })
    },
    oneCategory: (req, res) => {
        db.Category.findOne({where: {id:req.params.id }, include: [{association: "subcategory"}]}).then(category => {
            res.status(200).json({
                meta:{
                    status: 200
                },
                data: category
            })
        })
    }
}