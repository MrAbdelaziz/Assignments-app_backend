const Matiere = require('../models/Matiere');

const index = async (req, res) => {
  const { page, limit } = req.query;
  const matieres = await Matiere.paginate(
    {},
    {
      page: parseInt(page, 10) || 1,
      limit: parseInt(limit, 10) || 10,
      sort: { created_at: -1 },
    }
  );
  return res.status(200).json(matieres);
};

const show = async (req, res) => {
  const { id } = req.params;
  const matiere = await Matiere.findById(id);
  return res.status(200).json(matiere);
};

const store = async (req, res) => {
  const matiere = req.body;
  const newMatiere = await Matiere.create(matiere);
  return res.status(200).json(newMatiere);
};

const update = async (req, res) => {
  const { id } = req.params;
  const matiere = req.body;
  const newMatiere = await Matiere.findByIdAndUpdate(id, matiere, {
    new: true,
  });
  return res.status(200).json(newMatiere);
};

const destroy = async (req, res) => {
  const { id } = req.params;
  const m = await Matiere.findByIdAndDelete(id);
  return res.status(200).json(m);
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
