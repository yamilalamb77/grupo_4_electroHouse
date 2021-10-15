module.exports = (sequelize, dataTypes) => {
    let alias = "User";
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
        lastName: {
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
        timestamps: true
    }

    const User = sequelize.define(alias, cols, config)

    User.associate = models => {
         User.hasMany(models.Address, {
            as: "address",
            foreignKey:"userId" 
        }) 
         
    } 

    return User;
}
