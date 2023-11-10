import sequelize from '../db';
import { DataTypes } from "sequelize";
import useBcrypt from "sequelize-bcrypt"
const db = require('../index'); // Assuming your Sequelize instance is in the index.js file

const User = sequelize.define('User', {
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
      model: Role, // This should match the model name in your code (case-sensitive)
      key: 'id',
    },
  },
});

// Define the foreign key relationship
User.belongsTo(db.models.Role, { foreignKey: 'roleId' });

// Insert values into 'User' table

User.sync();
module.exports = User;
