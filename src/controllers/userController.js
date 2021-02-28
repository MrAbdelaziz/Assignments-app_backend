const User = require('../models/User');

const index = async (req, res) => {
  const { page, limit } = req.query;
  const users = await User.paginate(
    {},
    {
      page: parseInt(page, 10) || 1,
      limit: parseInt(limit, 10) || 10,
      sort: { created_at: -1 },
    }
  );
  return res.status(200).json(users);
};

const show = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  return res.status(200).json(user);
};

const store = async (req, res) => {
  const user = req.body;
  const newUser = await User.create(user);
  return res.status(200).json(newUser);
};

const update = async (req, res) => {
  const { id } = req.params;
  const user = req.body;
  const newUser = await User.findByIdAndUpdate(id, user, {
    new: true,
  });
  return res.status(200).json(newUser);
};

const destroy = async (req, res) => {
  const { id } = req.params;
  const u = await User.findByIdAndDelete(id);
  return res.status(200).json(u);
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
