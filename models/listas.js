const { mongoose } = require("mongoose")

const listasModel = mongoose.Schema({
    name: {type: String, required: true},
    _idUser: {type: String, required: true},
    _idApi : {type: String, required: true}
})

module.exports = mongoose.model('listas', listasModel);

