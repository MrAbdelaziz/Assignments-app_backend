const Devoire = require('../models/Devoir');

const index = async (req, res) => {
  const { page, limit, assignment, user } = req.query;
  if (assignment) {
    const devoires = await Devoire.paginate(
      { assignment },
      {
        page: parseInt(page, 10) || 1,
        limit: parseInt(limit, 10) || 10,
        sort: { created_at: -1 },
      }
    );
    return res.status(200).json(devoires);
  } else if(assignment && user) {
    const devoires = await Devoire.paginate(
      { assignment, user },
      {
        page: parseInt(page, 10) || 1,
        limit: parseInt(limit, 10) || 10,
        sort: { created_at: -1 },
      }
    );
    return res.status(200).json(devoires);
  }else {
    const devoires = await Devoire.paginate(
      {},
      {
        page: parseInt(page, 10) || 1,
        limit: parseInt(limit, 10) || 10,
        sort: { created_at: -1 },
      }
    );
    return res.status(200).json(devoires);
  }
};

const show = async (req, res) => {
  const { id } = req.params;
  const devoire = await Devoire.findById(id);
  return res.status(200).json(devoire);
};

const store = async (req, res) => {
  const devoir = req.body;
  const newDevoir = await Devoire.create(devoir);
  return res.status(200).json(newDevoir);
};

const update = async (req, res) => {
  const { id } = req.params;
  const devoir = req.body;
  const newDevoir = await Devoire.findByIdAndUpdate(id, devoir, {
    new: true,
  });
  return res.status(200).json(newDevoir);
};

const destroy = async (req, res) => {
  const { id } = req.params;
  const d = await Devoire.findByIdAndDelete(id);
  return res.status(200).json(d);
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
