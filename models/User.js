const { Model, DataTypes }= require('sequelize');
const sequelize = require('../config/connection');

// create User model
class User extends Model {}

// define table columns and configureation
User.init(
    {
        // TABLE COLUMN DEFINITIONS GO HERE
        // define id column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // username column
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // define password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        }
    },
    {
        // TABLE CONFIGURATION OPTIONS GO HERE
        // pass in imported sequelize connection (direct connection to database)
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;