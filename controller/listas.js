const listasModel = require("../models/listas");

const getAllListas = async (req, res) => {
  try {
    const lista = await listasModel.find();
    res.json(lista, "Lista encontrada");
  } catch (error) {
    res.error(error);
  }
};

const getLista = async (req, res) => {
  try {
    const { id } = req.params;
    const lista = await listasModel.findById({ _id: id });
    res.json(lista, "Lista encontrada por _id");
  } catch (error) {
    res.error(error);
  }
};

const postLista = async (req, res) => {
  try {
    const { name, _idUser, _idApi_movie } = req.body;
    const lista = await listasModel.create({ name, _idUser, _idApi_movie: { type: String, required: true } });
    res.json(lista, "Lista creada");
  } catch (error) {
    res.error(error);
  }
};

const deleteLista = async (req, res) => {
  try {
    const { id } = req.params;
    const lista = await listasModel.findByIdAndDelete({ _id: id });
    res.json(lista, "Lista eliminada");
  } catch (error) {
    res.error(error);
  }
};

const updateLista = async (req, res) => {
  try {
    const { id } = req.params;
    const lista = await listasModel.findByIdAndUpdate(id, { name, _idUser, _idApi_movie: { type: String, required: true } });
    res.json(lista, "Lista actualizada");
  } catch (error) {
    res.error(error);
  }
};

module.exports = {
  getAllListas,
  getLista,
  postLista,
  deleteLista,
  updateLista,
};
