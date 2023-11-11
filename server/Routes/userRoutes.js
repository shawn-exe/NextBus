const express = require('express');
const {loginuser}=require('../controllers/userController.js')
const router = express.Router()
router.post('/loginuser',loginuser)
module.exports = router;
