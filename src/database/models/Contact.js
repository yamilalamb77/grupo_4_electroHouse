module.exports = function(sequelize, dataTypes){
    let alias = "Contacts"; 
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(50)
        },
        email:{
            type: dataTypes.STRING(50),
            allowNull: false
        },
        telephone: {
            type: dataTypes.INTEGER(50),
        },
        website: {
            type: dataTypes.STRING(150)
        },
        affair: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        message: {
            type: dataTypes.STRING(800),
            allowNull: false
        }
    }
    let config = {
        tableName: "contacts",
        timestamps: false
    }

    const Contacts = sequelize.define(alias, cols, config)

    return Contacts
}