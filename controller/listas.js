const listasModel = require('../models/listas');

const getListas = async (req, res)=>{
    try {
        const lista = await listasModel.find()
        res.json(lista);
    } catch (error) {
        res.error(error);
    }
}

const postListas = async (req, res)=>{
    try {
        const { name, _idUser, _idApi } = req.body;
        const lista = await listasModel.create({ name, _idUser, _idApi });
        res.json(lista);
    } catch (error) {
        res.error(error);
    }
}

module.exports = {
    getListas,
    postListas
}