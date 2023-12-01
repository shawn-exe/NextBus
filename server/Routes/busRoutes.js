const express = require('express');
const router = express.Router();
const { getAllBuses,addbuses} = require('../controllers/busController');

router.post('/addbuses',addbuses)
router.get('/getAllBuses', async (req, res) => {
  try {
    const buses = await getAllBuses();
    res.json(buses);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
