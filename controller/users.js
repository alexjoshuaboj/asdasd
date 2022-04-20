const usersModel = require('../models/users');

const getMovie = async (req, res)=>{
    try {
        const user = await usersModel.find()
        res.json(user);
    } catch (error) {
        res.error(error);
    }
}

const postMovie = async (req, res)=>{
    try {
        const { name, pass, _isAdmin } = req.body;
        const user = await usersModel.create({ name, pass, _isAdmin });
        res.json(user);
    } catch (error) {
        res.error(error);
    }
}

module.exports = {
    getMovie,
    postMovie
}