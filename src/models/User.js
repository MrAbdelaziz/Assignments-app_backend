const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const schema = mongoose.Schema;

const User = new schema({
  id: mongoose.Types.ObjectId,
  name: String,
  username: String,
  email: String,
  password: String,
  role: String,
  avatar: String,

  matiere: {
    type: mongoose.Types.ObjectId,
    ref: 'Matiere',
  },
  created_at: {
    type: String,
    default: new Date().toISOString(),
  },
});

User.plugin(mongoosePaginate);
User.pre(/^find/, function () {
  this.populate({
    path: 'matiere',
  });
});

module.exports = mongoose.model('User', User);
