const { mongoose } = require("mongoose")

const peliculasModel = mongoose.Schema({
  _idApi: { type: String, required: true },
  meta: {
    notes: { type: String },
    rating: { type: Number },
  }
})

module.exports = mongoose.model('peliculas', peliculasModel);

