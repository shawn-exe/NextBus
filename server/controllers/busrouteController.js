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
  
  module.exports = { getAllRoutes };
  