const Sequelize = require('sequelize');
const sequelize = new Sequelize("nextbus", "root", "ash@23923",{
  host: 'localhost',
  dialect: 'mysql'
});

module.exports=sequelize;