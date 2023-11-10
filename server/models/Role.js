// models/Role.js
const { Sequelize, DataTypes } = require('sequelize');
const db = require('../index'); // Assuming your Sequelize instance is in the index.js file

const Role = db.define('Role', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  roleName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

Role.sync();
Role.create({
    id :1,
    roleName: 'Admin',
  })
    .then((role) => {
      console.log('Role created:', role.toJSON());
    })
    .catch((error) => {
      console.error('Error creating role:', error);
    });
module.exports = Role;
