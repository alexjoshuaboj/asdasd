const { mongoose } = require("mongoose")

const peliculasModel = mongoose.Schema({
    _idApi : {type: String, required: true},
    meta: {
        comments: {type: String},
        favs:  {type: Number},
      }
})

module.exports = mongoose.model('peliculas', peliculasModel);

