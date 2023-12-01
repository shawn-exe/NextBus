const sequelize =require("../db");
const DataTypes =require("sequelize");

const Routes =sequelize.define('Routes',{
    routeid:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
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
        type: DataTypes.STRING, 
        allowNull: false,
    },
    stops:{
        type:DataTypes.INTEGER,
        allowNull: false,
    }
});


Routes.sync();
module.exports=Routes;