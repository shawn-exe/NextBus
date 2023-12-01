const Routes = require("../models/Routes")
const getAllRoutes = async () => {
    try {
      const routes = await Routes.findAll();
      return routes;
    } catch (error) {
      console.error('Error retrieving Routes:', error);
      throw error;
    }
  };
  
  const createRoute = async (req, res) => {
    const { routeid, source, destination, duration, stops } = req.body;
    try {
      const existingRoute = await Routes.findOne({ where: { routeid } });
      if (existingRoute) {
        return res.status(400).json({ status: 'Failure', message: 'Route already exists' });
      }
      const newRoute = await Routes.create({
        routeid,
        source,
        destination,
        duration,
        stops,
      });
      return res.status(201).json({ status: 'Success', message: 'Route added successfully'});
    } catch (error) {
      return res.status(500).json({ status: 'Failure', message: 'Internal server error' });
    }
  };

  const removeRoute = async (req, res) => {
    const { routeid } = req.params; 
    try {
      const existingRoute = await Routes.findOne({ where: { routeid} });
      if (!existingRoute) {
        return res.status(404).json({ status: 'Failure', message: 'Route not found' });
      }
      await Routes.destroy({ where: {routeid} });
      return res.status(200).json({ status: 'Success', message: 'Route removed successfully' });
    } catch (error) {
      return res.status(500).json({ status: 'Failure', message: 'Internal server error' });
    }
  };

  module.exports = { getAllRoutes ,createRoute,removeRoute };
  