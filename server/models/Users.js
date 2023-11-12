const sequelize =require("../db");
const DataTypes =require("sequelize");
const useBcrypt =require("sequelize-bcrypt");
const Role =require('./Role')
// Assuming your Sequelize instance is in the index.js file
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

/*User.create({
  username:"admin@gmail.com",
  password:"myadmin",
  roleId:2,
}).then((user) =>{
    console.log("User created successfully",user)
}).catch((err) => {
  console.log("An error occured",err)
})*/

User.sync();
module.exports = User;
