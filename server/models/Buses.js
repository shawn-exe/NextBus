const sequelize = require("../db");
const DataTypes = require("sequelize");
const Routes = require('./Routes');

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
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        set(value) {    
            if (value) {
                const formattedTime = new Date(`2000-01-01T${value}`);
                this.setDataValue('arrtime', formattedTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }));
            }
        },
    },
    routeid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Routes,
            key: 'routeid',
        },
    }
}, {
    timestamps: false, // Disable createdAt and updatedAt
});

/*Buses.create({
    regno: "KA21EZ101",
    bname:"Vishal",
    type: "Express",
    arrtime: "13:15",
    routeid: 1
})*/

Buses.belongsTo(Routes, { foreignKey: 'routeid' });
Buses.sync();
module.exports = Buses;
