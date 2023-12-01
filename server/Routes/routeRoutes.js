const express = require('express');
const router = express.Router();
const { getAllRoutes,createRoute } = require('../controllers/busrouteController');

router.post('/createRoute',createRoute)

router.get('/getAllRoutes', async (req, res) => {
  try {
    const routes = await getAllRoutes({
      order: [['routeid','ASC']],
    });
    res.json(routes);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
