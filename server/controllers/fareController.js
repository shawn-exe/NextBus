const Fares = require('../models/Fares');
const Routes =require('../models/Routes');
const getAllFares = async () => {
    try{
        const fares = await Fares.findAll({
            order: [['fareid', 'ASC']],
            include: [{ model: Routes, attributes: ['routeid'] }]
        });
        return fares;
    } catch (error) {
      console.error('Error retrieving fares:', error);
      throw error;
    }
  };
  
  module.exports = { getAllFares };
  