const listasModel = require("../models/listas");

const getAllListas = async (req, res) => {
  try {
    const listas = await listasModel.find();
    res.status(200).send((listas, "Lista encontradas").toString());
  } catch (error) {
    res.status(error.status || 500).send(error);
  }
};

const getLista = async (req, res) => {
  try {
    const { id } = req.params;
    const lista = await listasModel.findById({ _id: id });
    res.status(200).send((lista, `Lista encontrada por ${id}`).toString());
  } catch (error) {
    res.status(error.status || 500).send(error);
  }
};

const postLista = async (req, res) => {
  try {
    const { name, _idUser, _idApi_movie } = req.body;
    const lista = await listasModel.create({ name, _idUser, _idApi_movie });
    res.status(200).send((lista, "Lista creada").toString());
  } catch (error) {
    res.status(error.status || 500).send(error);
  }
};

const deleteLista = async (req, res) => {
  try {
    const { id } = req.params;
    const lista = await listasModel.findByIdAndDelete({ _id: id });
    res.status(200).send((lista, `Lista eliminada por ${id}`).toString());
  } catch (error) {
    res.status(error.status || 500).send(error);
  }
};

const updateLista = async (req, res) => {
  try {
    const { id } = req.params;
    const lista = await listasModel.findByIdAndUpdate(id, { name, _idUser, _idApi_movie: { type: String, required: true } });
    res.status(200).send((lista, `Lista actualizada por ${id}`).toString());
  } catch (error) {
    res.status(error.status || 500).send(error);
  }
};

module.exports = {
  getAllListas,
  getLista,
  postLista,
  deleteLista,
  updateLista,
};
