const { mongoose } = require("mongoose");

const peliculasModel = mongoose.Schema({
  title: { type: String, required: true },
  overview: { type: String, required: true },
  poster_path: { type: String, required: true },
  rating: { type: Number, required: true },
  genres: { type: Array, required: true },
  runtime: { type: Number, required: true },
  notes: { type: String },
  user_rating: { type: Number },
});

module.exports = mongoose.model("peliculas", peliculasModel);
