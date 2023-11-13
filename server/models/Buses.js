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
});

/*Buses.create({
    regno: 'kaanti',
    bname: 'ajssj sasBus',
    type: 'non-AC',
    arrtime: '13:59',
    routeid: 1,
})
    .then((bus) => {
        console.log('Bus created:', bus);
    })
    .catch((error) => {
        console.error('Error creating bus:', error);
    });*/

Buses.sync();
module.exports = Buses;
