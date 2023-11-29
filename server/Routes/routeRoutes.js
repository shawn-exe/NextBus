const express = require('express');
const router = express.Router();
const { getAllRoutes } = require('../controllers/busrouteController');

router.get('/getAllRoutes', async (req, res) => {
  try {
    const routes = await getAllRoutes();
    res.json(routes);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
