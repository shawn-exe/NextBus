const sequelize =require("../db");
const DataTypes =require("sequelize");
const useBcrypt =require("sequelize-bcrypt");
const Role = sequelize.define('Role', {
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
