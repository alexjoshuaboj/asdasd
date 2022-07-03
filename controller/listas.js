const listasModel = require('../models/listas');


const getListaById = async (req, res) => {
  try {
    const { id } = req.params;
    const lista = await listasModel.findById({ _id: id });
    res.status(200, `Lista encontrada por ${id}`).send(lista);
  } catch (error) {
    res.status(error.status || 500).send(error);
  }
};

const getListaByIdUserandName = async (req, res) => {
  try {
    const { iduser, nombre } = req.params;
    const lista = await listasModel.findOne({ _idUsuario: iduser , nombre: nombre});
    res.status(200, `Lista encontrada por ${iduser} y ${nombre}`).send(lista);
  } catch (error) {
    res.status(error.status || 500).send(error);
  }
};

const getListasByUserId = async (req, res) => {
  try {
    const { iduser } = req.params;
    console.log('hola', req.params);
    const lista = await listasModel.find({ _idUsuario: iduser });
    res.status(200, `Listas del usuario con id: ${id}`).send(lista);
  } catch (error) {
    res.status(error.status || 500).send(error);
  }
};
const createLista = async (req, res) => {
  try {
    const { nombre, _idUsuario, peliculas } = req.body;
    const lista = await listasModel.create({ nombre, _idUsuario, peliculas });
    res.status(200, 'Lista creada').send(lista);
  } catch (error) {
    res.status(error.status || 500).send(error);
  }
};

const deleteLista = async (req, res) => {
  try {
    const { id } = req.params;
    const lista = await listasModel.findByIdAndDelete({ _id: id });
    res.status(200, `Lista eliminada por ${id}`).send(lista);
  } catch (error) {
    res.status(error.status || 500).send(error);
  }
};

/**
 * añade una peli a una lista
 * devuelve la lista
 */
const addPelicula = async (req, res) => {
  try {
    const { id, idpeli } = req.params;
    const lista = await listasModel.updateOne({ _id: id }, { $push: { peliculas: idpeli } });
    res.status(200, `pelicula añadida a lista con id:${id}`).send(lista);
  } catch (error) {
    res.status(error.status || 500).send(error);
  }
};

/**
 * elimina una peli de la lista
 * devuelve la lista
 */
const deletePelicula = async (req, res) => {
  try {
    const { id, idpeli } = req.params;
    const lista = await listasModel.updateOne({ _id: id }, { $pull: { peliculas: idpeli } });
    res.status(200, `pelicula eliminada de lista con ${id}`).send(lista);
  } catch (error) {
    res.status(error.status || 500).send(error);
  }
};



module.exports = {
  getListaById,
  getListasByUserId,
  getListaByIdUserandName,
  createLista,
  deleteLista,
  addPelicula,
  deletePelicula
};
