const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database'); // Corrigir o caminho do arquivo database

const Cardapio = sequelize.define('Donuts', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Cardapio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  listId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Lists', // nome da tabela no banco de dados
      key: 'id'
    }
  }
});

module.exports = Cardapio; // Corrigir o nome da exportação para Cardapio



