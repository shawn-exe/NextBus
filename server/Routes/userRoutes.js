const express = require('express');
const {loginuser,registeruser}=require('../controllers/userController.js')
const router = express.Router()
router.post('/loginuser',loginuser)
router.post('/registeruser',registeruser)
module.exports = router;
