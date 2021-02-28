const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const schema = mongoose.Schema;

const Matiere = new schema({
  id: mongoose.Types.ObjectId,
  name: String,
  thumbnail: String,
  created_at: {
    type: String,
    default: new Date().toISOString(),
  },
});

Matiere.plugin(mongoosePaginate);

module.exports = mongoose.model('Matiere', Matiere);
