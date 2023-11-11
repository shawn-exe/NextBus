const {Users} = require('../models/Users');
 // Adjust the path accordingly

const loginuser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({ where: { email } });

    if (user && user.password === password) {
      // Authentication successful
      return res.status(200).json({ message: 'Success' });
    } else {
      // Authentication failed
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { loginuser };
