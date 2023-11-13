const sequelize =require("../db");
const DataTypes =require("sequelize");

const Routes =sequelize.define('Routes',{
    routeid:{
        type:DataTypes.INTEGER,
        primaryKey: true,
    },
    source: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    destination: {
        type: DataTypes.STRING,
        allowNull: false,
    },  
    duration: {
        type: DataTypes.STRING, // Using STRING to store "1hr 45 mins"
        allowNull: false,
    },
    stops:{
        type:DataTypes.INTEGER,
        allowNull: false,
    }
});
Routes.sync();
module.exports=Routes;