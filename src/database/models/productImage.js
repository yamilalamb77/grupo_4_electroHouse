module.exports = function(sequelize, dataTypes){
    let alias = "ProductImage";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        image: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        productId: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
    }
    let config = {
        tableName: "productimage",
        timestamps: false
    }

    const ProductImage = sequelize.define(alias, cols, config)

     ProductImage.associate = models => {
        ProductImage.belongsTo(models.Product, {
            as: "product",
            foreignKey: "productID"
        })
    }

    return ProductImage
}