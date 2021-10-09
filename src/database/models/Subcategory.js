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
        /* createdAt :{
            type: dataTypes.DATE
        },
        updatedAT: {
            type: dataTypes.DATE
        }, */  //no lo tenian, pero nuestra data si, si queres que quede descomenta, si no borra
    }
    let config = {
        tableName: "subcategories",
        timestamps: false 
        /* timestamps: true */ //si lo dejas, descomenta esto y borra el reglon 27
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