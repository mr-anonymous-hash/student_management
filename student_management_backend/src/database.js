const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    'bharath',
    'root',
    'sibi2002',{
  dialect: 'mysql',
  host:'localhost'
});

module.exports = sequelize