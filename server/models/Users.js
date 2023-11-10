// models/User.js

const { Sequelize, DataTypes } = require('sequelize');
const db = require('../index'); // Assuming your Sequelize instance is in the index.js file

const User = db.define('User', {
  username: {
    type: DataTypes.STRING,
    primaryKey: true, // Set 'username' as the primary key
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  roleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Roles', // This should match the model name in your code (case-sensitive)
      key: 'id',
    },
  },
});

// Define the foreign key relationship
User.belongsTo(db.models.Role, { foreignKey: 'roleId' });

// Insert values into 'User' table
User.create({
    username: 'john_doe',
    password: 'hashed_password', // Replace with the actual hashed password
    roleId: 1, // Replace with the corresponding role ID from the 'Role' table
  })
    .then((user) => {
      console.log('User created:', user.toJSON());
    })
    .catch((error) => {
      console.error('Error creating user:', error);
    });

User.sync();

module.exports = User;
