module.exports = (sequelize, dataTypes) => {
    let alias = "Carts"
    let cols ={
        id: {
            type: dataTypes.INTEGER(11), 
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        usuarioId:{
            type: dataTypes.INTEGER(11), 
            allowNull: false 
        },
        productId:{
            type: dataTypes.INTEGER(11), 
            allowNull: false 
        },
        amount:{ /* cantidad */
            type: dataTypes.INTEGER(11), 
            allowNull: false 
        }
    }
    let config = {
        tableName : "carts",
        timestamps : false
    };

    const Cart = sequelize.define(alias, cols, config)
    Cart.associate = models => {
        Cart.belongsTo(models.User, {
            as: "user",
            foreignKey: "userId" 
        })
        Cart.hasMany(models.products, {
            as: "product",
            foreignKey: "productId" 
        })
    }
 
    


return Peliculas 
}