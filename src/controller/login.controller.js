const jwt = require('jsonwebtoken');
const { User } = require('../models');

const generateAuthToken = (userId) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET);
  return token;
};

const loginFunction = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const user = await User.findOne({ where: { email } });

  if (!user) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const token = generateAuthToken(user.id);
  return res.status(200).json({ token });
};

module.exports = { loginFunction };