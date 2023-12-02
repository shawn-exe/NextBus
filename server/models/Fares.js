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

Fares.belongsTo(Routes, { foreignKey: 'routeid' });
Fares.sync();
Routes.sync();
module.exports = Fares;