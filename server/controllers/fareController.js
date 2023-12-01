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
  
  const addfares = async (req, res) => {
    const { fareid, routeid, cfare, fare } = req.body;
  
    try {
      const existingFare = await Fares.findOne({ where: { fareid } });
      if (existingFare) {
        return res.status(400).json({ status: 'Failure', message: 'Ticket Fare information already exists' });
      }
      // Create a new Route
      const newRoute = await Fares.create({
        fareid,
        routeid,
        cfare,
        fare,
      });
      return res.status(201).json({ status: 'Success', message: 'Route added successfully'});
    } catch (error) {
      return res.status(500).json({ status: 'Failure', message: 'Internal server error' });
    }
  };



  module.exports = { getAllFares, addfares };
  