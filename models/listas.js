const { mongoose } = require("mongoose")

const listasModel = mongoose.Schema({
    name: { type: String, required: true },
    _idUser: { type: String },
    peliculas: { type: Array },
})

module.exports = mongoose.model('listas', listasModel);

