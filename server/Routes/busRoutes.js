const express = require('express');
const router = express.Router();
const { getAllBuses,addbuses,removeBus} = require('../controllers/busController');

router.post('/addbuses',addbuses);
// Add a route parameter to capture the registration number
router.delete('/removeBus/:regno/:arrtime', removeBus);
router.get('/getAllBuses', async (req, res) => {
  try {
    const buses = await getAllBuses();
    res.json(buses);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
