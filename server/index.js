const express = require('express');
const cors = require('cors');
const userRouter = require('./Routes/userRoutes');
const busRouter = require('./Routes/busRoutes'); 
const routeRouter = require('./Routes/routeRoutes'); 
const fareRouter =require('./Routes/fareRoutes')

const bodyParser = require('body-parser');
const mysql2 = require('mysql2');
const { Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { sequelizeBcrypt } = require('sequelize-bcrypt');
require('dotenv').config();
const Role = require('./models/Role');
const Users = require('./models/Users');
const Routes = require('./models/Routes');
const Buses = require('./models/Buses');
const Fares = require('./models/Fares');
const app = express();
const port = process.env.PORT || 3001;
const sequelize = require('./db');
const dotenv = require('dotenv');
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(busRouter);
app.use(routeRouter);
app.use(fareRouter);
app.use(bodyParser.urlencoded({ extended: true }));
sequelize
  .authenticate()
  .then(() => console.log('Database connection successful'))
  .catch((err) => console.error('Error connecting to the database:', err));
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
