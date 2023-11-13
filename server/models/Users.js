const sequelize =require("../db");
const DataTypes =require("sequelize");
const useBcrypt =require("sequelize-bcrypt");
const Role =require('./Role')

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    primaryKey: true, 
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
      model: Role, 
      key: 'id',
    },
  },
});
User.sync();
Role.sync();
module.exports = User;
