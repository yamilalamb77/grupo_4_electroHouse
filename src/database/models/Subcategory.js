module.exports = function(sequelize, dataTypes){
    let alias = "Subcategories";
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
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
       
    }

    const Subcategory = sequelize.define(alias, cols, config)

    Subcategory.associate = models => {
        Subcategory.belongsTo(models.Category, {
            as: "category",
            foreignKey: "categoryId"
        })
        Subcategory.hasMany(models.Product, {
            as: "products",
            foreignKey: "subcategoryId"
        })
    }

    return Subcategory
}