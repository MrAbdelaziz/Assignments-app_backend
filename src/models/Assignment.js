const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const schema = mongoose.Schema;

const Assignment = new schema({
  id: mongoose.Types.ObjectId,
  title: String,
  des: String,
  groupe: String,
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  created_at: {
    type: String,
    default: new Date().toISOString(),
  },
});

Assignment.plugin(mongoosePaginate);

module.exports = mongoose.model('Assignment', Assignment);
