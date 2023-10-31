const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection.js');

const User = sequelize.define('user', {

  first_name: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(40),
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  birthday: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }
});

module.exports = User;