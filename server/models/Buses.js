const sequelize = require("../db");
const DataTypes = require("sequelize");
const Routes =require('./Routes')
const Buses = sequelize.define('Buses', {
    regno: {
        type: DataTypes.STRING,
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
        type: DataTypes.STRING, // Use STRING to store time in 12-hour format
        allowNull: false,
        get() {
            const rawValue = this.getDataValue('arrtime');
            // Format the time using Sequelize's custom getter
            return rawValue ? rawValue.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }) : null;
        },
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
