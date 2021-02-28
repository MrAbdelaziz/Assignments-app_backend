const Assignment = require('../models/Assignment');

const index = async (req, res) => {
  const { page, limit } = req.query;
  const assignments = await Assignment.paginate(
    {},
    {
      page: parseInt(page, 10) || 1,
      limit: parseInt(limit, 10) || 10,
      populate: 'user',
      sort: { created_at: -1 },
    }
  );
  return res.status(200).json(assignments);
};

const show = async (req, res) => {
  const { id } = req.params;
  const assignment = await Assignment.findById(id);
  return res.status(200).json(assignment);
};

const store = async (req, res) => {
  const assignment = req.body;
  const newAssignment = await Assignment.create(assignment);
  return res.status(200).json(newAssignment);
};

const update = async (req, res) => {
  const { id } = req.params;
  const assignment = req.body;
  const newAssignment = await Assignment.findByIdAndUpdate(id, assignment, {
    new: true,
  });
  return res.status(200).json(newAssignment);
};

const destroy = async (req, res) => {
  const { id } = req.params;
  const a = await Assignment.findByIdAndDelete(id);
  return res.status(200).json(a);
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
