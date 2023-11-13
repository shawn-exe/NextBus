const Buses = require('../models/Buses');
const Routes =require('../models/Routes')
const getAllBuses = async () => {
  try {
    const buses = await Buses.findAll({
      order: [['arrtime', 'ASC']], // Order by arrtime in ascending order
      include: [{ model: Routes, attributes: ['source', 'destination'] }], // Include related Route information
    });
    return buses;
  } catch (error) {
    console.error('Error retrieving buses:', error);
    throw error;
  }
};

module.exports = { getAllBuses };
