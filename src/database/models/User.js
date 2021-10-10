module.exports = (sequelize, dataTypes) => {
    let alias = "Users";
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
        last_name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(60),
            allowNull: false,
            unique: true
        },
        pass: {
            type: dataTypes.STRING(70),
            allowNull: false
        },
        phone:{
            type: dataTypes.STRING(30)
        },
        rol: {
            type: dataTypes.INTEGER(2).UNSIGNED,
            allowNull: false
        },
        avatar:{
            type: dataTypes.STRING(100)
        }
    }
    let config = {
        tableName: "users",
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }

    const User = sequelize.define(alias, cols, config)

    User.associate = models => {
        User.hasMany(models.Address, {
            as: "addresses",
            foreignKey:"userId" 
        })
        User.belongsTo(models.Cart, {
            as: "cart",
            foreignKey: "cartId" 
        })
    }

    return User;
}
