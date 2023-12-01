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

const addbuses = async (req, res) => {
  const { regno, bname, type, arrtime, routeid } = req.body;
  try {
    const existingBus = await Buses.findOne({ where: { regno,arrtime} });
    if (existingBus) {
      return res.status(400).json({ status: 'Failure', message: 'Bus already exists' });
    }
    // Create a new Route
    const newBus = await Buses.create({
      regno,
      bname,
      type,
      arrtime,
      routeid,
    });
    return res.status(201).json({ status: 'Success', message: 'Bus added successfully'});
  } catch (error) {
    return res.status(500).json({ status: 'Failure', message: 'Internal server error' });
  }
};
module.exports = { getAllBuses,addbuses };
