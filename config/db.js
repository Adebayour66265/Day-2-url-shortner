const { Sequelize } = require('sequelize');

const createDB = new Sequelize("Day2", "user", "password", {
    dialect: "sqlite",
    host: "./config/db.sqlite",
});

module.exports = createDB;