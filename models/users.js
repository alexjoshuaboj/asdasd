const { mongoose } = require("mongoose")

const userModel = mongoose.Schema({
    name: {type: String, required: true},
    pass: { type: String, required: true },
    idLista_Vistas: { type: String },
    idLista_Fav: { type: String }
})

module.exports = mongoose.model('users', userModel);

