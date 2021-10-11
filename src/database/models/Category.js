module.exports = function(sequelize, dataTypes){
    let alias = "Category";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        banner: {
            type: dataTypes.STRING,
            allowNull: false
        }
    }
    let config = {
        tableName: "categories",
        timestamps: false
    }

    const Category = sequelize.define(alias, cols, config)

     Category.associate = models => {
        Category.hasMany(models.Subcategory, {
            as: "subcategory",
            foreignKey: "categoryId"
        })
    } 
    return Category
}