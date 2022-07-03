const peliculasModel = require('../models/peliculas');

const getPeliculaById = async (req, res) => {
  try {
    const { id } = req.params;
    const pelicula = await peliculasModel.findById({ _id: id });
    res.status(200, `Pelicula encontrada por ${id}`).send(pelicula);
  } catch (error) {
    res.status(error.status || 500).send(error);
  }
};
const getPeliculasByUserId = async (req, res) => {
  try {
    const { iduser } = req.params;
    console.log('adios', req.params);
    const pelicula = await peliculasModel.find({ _idUsuario: iduser });
    res.status(200, `Peliculas del usuario con id:${id}`).send(pelicula);
  } catch (error) {
    res.status(error.status || 500).send(error);
  }
};
const getPeliculaByIdUserAndIdmoviedb = async (req, res) => {
  try {
    const { iduser, idmoviedb } = req.params;
    const pelicula = await peliculasModel.findOne({ _idUsuario: iduser, idmoviedb: idmoviedb });
    res.status(200, `Pelicula encontrada por iduser ${iduser} y ${idmoviedb} moviedb`).send(pelicula);
  } catch (error) {
    res.status(error.status || 500).send(error);
  }
};

const createPelicula = async (req, res) => {
  try {
    const { idmoviedb, titulo, poster, rating, comentario, _idUsuario, listas } = req.body;
    const pelicula = await peliculasModel.create({ idmoviedb, titulo, poster, rating, comentario, _idUsuario, listas });
    res.status(200, 'Pelicula creada').send(pelicula);
  } catch (error) {
    res.status(error.status || 500).send(error);
  }
};
// nota: no hay delete pelicula porque no tiene sentido
/**
 * update una peli pero solo titulo rating y comentario
 * nunca vas a cambiar idusuario ni idmoviedb(a no ser que cambie)
 */
const updatePelicula = async (req, res) => {
  try {
    const { id } = req.params;
    const { idmoviedb, titulo, poster, rating, comentario } = req.body;
    const pelicula = await peliculasModel.findByIdAndUpdate(id, { idmoviedb, titulo, poster, rating, comentario });
    res.status(200, 'Pelicula actualizada').send(pelicula);
  } catch (error) {
    res.status(error.status || 500).send(error);
  }
};

const deletePelicula = async (req, res) => {
  try {
    const { id } = req.params;
    const pelicula = await peliculasModel.findByIdAndDelete({ _id: id });
    res.status(200, `Pelicula eliminada por ${id}`).send(pelicula);
  } catch (error) {
    res.status(error.status || 500).send(error);
  }
};

module.exports = {
  getPeliculaById,
  getPeliculasByUserId,
  getPeliculaByIdUserAndIdmoviedb,
  createPelicula,
  updatePelicula,
  deletePelicula,
};
