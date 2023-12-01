const sequelize = require("../db");
const DataTypes = require("sequelize");
const Routes = require('./Routes')
const Fares = sequelize.define('Fares',{
fareid:{
    type: DataTypes.INTEGER,
    primaryKey:true,
},
routeid:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: Routes,
        key: 'routeid',
    }
},
fare:{
    type: DataTypes.INTEGER,
    allowNull:false,   
},
cfare:{
    type: DataTypes.INTEGER,
    allowNull:false,   
}
});

/*Fares.create({
    fareid: 1,
    routeid: 1,
    fare: 150,
    cfare: 79,
})
    .then((fare) => { 
        console.log('fare created');

    })
    .catch((error) => {
        console.error('Error creating fare:', error);
    });*/

Fares.belongsTo(Routes, { foreignKey: 'routeid' });
Fares.sync();
module.exports = Fares;