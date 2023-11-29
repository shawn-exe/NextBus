const Fares = require('../models/Fares');
const getAllFares = async () => {
    try{
        const fares = await Fares.findAll({
            order: [['fareid', 'ASC']],
        });
        return fares;
    } catch (error) {
      console.error('Error retrieving fares:', error);
      throw error;
    }
  };
  
  module.exports = { getAllFares };
  