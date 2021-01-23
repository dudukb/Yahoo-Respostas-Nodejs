const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','root','DUDU_1234', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;
