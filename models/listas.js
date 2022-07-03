const { mongoose } = require("mongoose")

const listasModel = mongoose.Schema({
    nombre: { type: String, required: true },
    _idUsuario: { type: String },
    peliculas: { type: Array },
})

module.exports = mongoose.model('listas', listasModel);

