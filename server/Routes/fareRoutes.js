const express = require('express');
const router = express.Router();
const { getAllFares , addfares, removeFares } = require('../controllers/fareController');
router.post('/addfares',addfares);
router.delete('/removeFares/:fareid',removeFares);
router.get('/getAllFares', async (req, res) => {
  try {
    const fares = await getAllFares({
      order: [['fareid','ASC']],
    });
    res.json(fares);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
