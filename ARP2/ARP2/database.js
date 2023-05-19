const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tasks', 'root', 'Pascoa@123', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
