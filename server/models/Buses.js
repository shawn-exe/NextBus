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
                const [hours, minutes] = value.split(':');
                const formattedTime = new Date();
                formattedTime.setHours(parseInt(hours, 10));
                formattedTime.setMinutes(parseInt(minutes, 10));
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
            onUpdate: 'CASCADE', 
        },
        onDelete: 'CASCADE', 
    }
}, {
    timestamps: false, // Disable createdAt and updatedAt
});

Buses.belongsTo(Routes, { foreignKey: 'routeid' });
Buses.sync();
module.exports = Buses;
