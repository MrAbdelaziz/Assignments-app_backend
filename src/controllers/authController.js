const User = require('../models/User');
const config = require('../config');
const jwt = require('jsonwebtoken');

const makeToken = async (data) => {
  return await jwt.sign({ data }, config.accessTokenKey, { expiresIn: '1h' });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });
  if (!user) {
    return res.status(404).json({
      message: 'user not found!!!',
    });
  }

  return res.status(200).json({
    accepted: true,
    data: user,
    token: await makeToken(user._id),
  });
};

module.exports = {
  login,
};
