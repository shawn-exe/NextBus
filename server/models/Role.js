// models/Role.js
const { Sequelize, DataTypes } = require('sequelize');
// Assuming your Sequelize instance is in the index.js file

const Role = Sequelize.define('Role', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  roleName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

Role.sync();
module.exports = Role;
