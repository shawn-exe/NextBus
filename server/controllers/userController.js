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
module.exports = { loginuser };

