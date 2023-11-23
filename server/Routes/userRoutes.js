const express = require('express');
const {loginuser,registeruser, loginadmin}=require('../controllers/userController.js')
const router = express.Router()
router.post('/loginuser',loginuser)
router.post('/registeruser',registeruser)
router.post('/loginadmin',loginadmin)
module.exports = router;
