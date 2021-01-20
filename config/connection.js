require('dotenv').config();

const Sequelize = require('sequelize');

const sequelizeConnection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: process.env.MYSQL_PORT || 3006,
    dialectOptions: {
        decimalNumbers: true,
    },
});

module.exports = sequelizeConnection;