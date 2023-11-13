const express = require('express');
const router = express.Router();
const { getAllBuses } = require('../controllers/busController');

router.get('/getAllBuses', async (req, res) => {
  try {
    const buses = await getAllBuses();
    res.json(buses);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
