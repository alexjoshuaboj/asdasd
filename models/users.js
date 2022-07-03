const { mongoose } = require('mongoose');

const userModel = mongoose.Schema({
  nombre: { type: String, required: true },
  pass: { type: String, required: true }
});

module.exports = mongoose.model('users', userModel);
