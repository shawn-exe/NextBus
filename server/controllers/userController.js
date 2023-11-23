const User = require('../models/Users');
const loginuser = async (req, res) => {
  const { username, password } = req.body; 
  try {
    const user = await User.findOne({ where: { username } }); 
    if (user && user.password === password && user.roleId === 1) {
      return res.status(200).json({ status: 'Success', message: 'Login successful' });
    } else {
      return res.status(401).json({ status: 'Failure', message: 'Invalid credentials' });
    }
  } catch (error) {
    return res.status(500).json({ status: 'Failure', message: 'Internal server error' });
  }
};

const loginadmin = async (req, res) => {
  const { username, password } = req.body; 
  try {
    const user = await User.findOne({ where: { username } }); 
    if (user && user.password === password && user.roleId === 2) {
      return res.status(200).json({ status: 'Success', message: 'Login successful' });
    } else {
      return res.status(401).json({ status: 'Failure', message: 'Invalid credentials' });
    }
  } catch (error) {
    return res.status(500).json({ status: 'Failure', message: 'Internal server error' });
  }
};


const registeruser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ status: 'Failure', message: 'Username already exists' });
    }
    // Create a new user
    const newUser = await User.create({
      username,
      password, // This should be automatically hashed if sequelize-bcrypt is properly configured
      roleId: 1,
    });
    return res.status(201).json({ status: 'Success', message: 'User registered successfully'});
  } catch (error) {
    return res.status(500).json({ status: 'Failure', message: 'Internal server error' });
  }
};

module.exports = { loginuser, registeruser,loginadmin };