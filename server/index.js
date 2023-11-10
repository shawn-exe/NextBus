const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('sequelize');
const mysql2 = require('mysql2');
const { Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { sequelizeBcrypt } = require('sequelize-bcrypt');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sequelize setup
const db = new sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Test the connection
db.authenticate()
  .then(() => console.log('Database connection successful'))
  .catch((err) => console.error('Error connecting to the database:', err));

// Define your models and associations here using Sequelize

// Define your routes and API endpoints here

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


