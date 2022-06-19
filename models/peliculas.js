const { mongoose } = require("mongoose")

const peliculasModel = mongoose.Schema({
  title: { type: String, required: true },
  _idmoviedb: { type: String, required: true },
  poster_path: { type: String, required: true },
  notes: { type: String },
  user_rating: { type: Number },
})

module.exports = mongoose.model('peliculas', peliculasModel);

