const express = require('express');
const router = express.Router();
const { getAllBuses,addbuses,removeBus,getBusDetails} = require('../controllers/busController');

router.post('/addbuses',addbuses);
router.delete('/removeBus/:regno/:arrtime', removeBus);
router.get('/getAllBuses', async (req, res) => {
  try {
    const buses = await getAllBuses();
    res.json(buses);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.get('/getBusDetails/:regno/:arrtime', async (req, res) => {
  const { regno, arrtime } = req.params;
  try {
    const busDetails = await getBusDetails(regno, arrtime);
    res.json(busDetails);
  } catch (error) {
    console.error('Error getting bus details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
module.exports = router;
