module.exports = function(sequelize, dataTypes){
    let alias = "Subcategory";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        categoryId: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
       
    }
    let config = {
        tableName: "subcategories",
        timestamps: true
    }

    const Subcategory = sequelize.define(alias, cols, config)

    Subcategory.associate = models => {
         Subcategory.belongsTo(models.Category, {
            as: "category",
            foreignKey: "categoriesId"
        }) 
         Subcategory.hasMany(models.Products, {
            as: "product",
            foreignKey: "subcategoriesId"
        }) 
    }

    return Subcategory
}