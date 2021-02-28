const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const schema = mongoose.Schema;

const Devoir = new schema({
  id: mongoose.Types.ObjectId,
  title: String,
  remarques: String,
  type: String,
  note: Number,

  assignment: {
    type: mongoose.Types.ObjectId,
    ref: 'Assignment',
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  created_at: {
    type: String,
    default: new Date().toISOString(),
  },
});

Devoir.plugin(mongoosePaginate);
Devoir.pre(/^find/, function () {
  this.populate({
    path: 'assignment',
  }).populate({
    path: 'user',
  });
});

module.exports = mongoose.model('Devoir', Devoir);
