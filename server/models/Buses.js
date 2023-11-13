/*const sequelize =require("../db");
const DataTypes =require("sequelize");

const Buses =sequelize.define('Buses',{
    regno:{
        type:DataTypes.STRING,
        primaryKey: true,
    },
    bname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },  
    arrtime: {
        type: DataTypes.TIME, // Use TIME to store time in 24-hour format
        allowNull: false,
    },
    routeid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Routes, // The name of the referenced table (assuming it's also named 'Routes')
            key: 'routeid', // The name of the referenced column in the referenced table
        },
    }
});


Buses.sync();
module.exports = Buses;
*/