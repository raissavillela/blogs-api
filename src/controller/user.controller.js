const jwt = require('jsonwebtoken');
const { User } = require('../models');

async function userFunction(req, res) {
  const { displayName, email, password } = req.body;

  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    return res.status(409).json({ message: 'User already registered' });
  }

  const newUser = await User.create({ displayName, email, password });

  const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET);

  return res.status(201).json({ token });
}

async function getAllUsers(req, res) {
  const users = await User.findAll({
    attributes: ['id', 'displayName', 'email', 'image'],
  });
  return res.status(200).json(users);
}

async function getUserId(req, res) {
  const { id } = req.params;
  const selectedUser = await User.findOne({
    where: { id },
    attributes: ['id', 'displayName', 'email', 'image'],
  });

  if (!selectedUser) {
    return res.status(404).json({ message: 'User does not exist' });
  }

  return res.status(200).json(selectedUser);
}

module.exports = { userFunction, getAllUsers, getUserId };