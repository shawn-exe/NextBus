const express = require('express');
const {loginuser,loginbto,registeruser, loginadmin}=require('../controllers/userController.js')
const router = express.Router()
router.post('/loginuser',loginuser)
router.post('/registeruser',registeruser)
router.post('/loginadmin',loginadmin)
router.post('/loginadmin',loginadmin)
router.post('/loginbto',loginbto)
module.exports = router;
