module.exports = function(sequelize, dataTypes){
    let alias = "Product"; //nombre del modelo en plural
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        price:{
            type: dataTypes.INTEGER(11), 
            allowNull: false
        },
        discount: {
            type: dataTypes.INTEGER(11),
        },
        description: {
            type: dataTypes.STRING(800), //aca esta el cambio

        },
        subcategoryId: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    }
    let config = {
        tableName: "products",
        timestamps: true,
         createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false 
    }

    const Product = sequelize.define(alias, cols, config)

    Product.associate = models => {
        Product.belongsTo(models.Subcategory, {
            as: "subcategory",
            foreignKey: "subcategoryId"
        }) 
        Product.hasMany(models.ProductImage, {
            as: "images",
            foreignKey: "productId"
        })
          Product.belongsTo(models.Cart, {
            as: "cart",
            foreignKey: "cartId"
        })  
    }

    return Product
}