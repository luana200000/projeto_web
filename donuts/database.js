/*
Curso: Engenharia de Software - UniEVANGÉLICA
Disciplina: Programação Web 
Dev: Luana Teixeira de Moraes - 2110867
Data: 15/05/2023
*/

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tasks', 'root', 'Pascoa@123', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;