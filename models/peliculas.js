const { mongoose } = require('mongoose');

const peliculasModel = mongoose.Schema({
  idmoviedb: { type: String, required: true },
  titulo: { type: String, required: true },
  poster: { type: String },
  rating: { type: Number },
  comentario: { type: String },
  _idUsuario: { type: String },
});

module.exports = mongoose.model('peliculas', peliculasModel);
