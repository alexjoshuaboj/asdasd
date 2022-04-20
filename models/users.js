const { mongoose } = require("mongoose")

const userModel = mongoose.Schema({
    name: {type: String, required: true},
    pass: {type: String, required: true},
    _isAdmin: {type: Boolean, required: true}
})

module.exports = mongoose.model('users', userModel);

