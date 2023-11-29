const Buses = require('../models/Buses');
const Routes =require('../models/Routes');
const getAllBuses = async () => {
  try {
    const buses = await Buses.findAll({
      order: [['arrtime', 'ASC']], 
      include: [{ model: Routes, attributes: ['source', 'destination'] }], 
    });
    return buses;
  } catch (error) {
    console.error('Error retrieving buses:', error);
    throw error;
  }
};

module.exports = { getAllBuses };
