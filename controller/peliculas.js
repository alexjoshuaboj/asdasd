const peliculasModel = require("../models/peliculas");

const getAllMovies = async (req, res) => {
  try {
    const pelicula = await peliculasModel.find();
    res.status(200).send({data: pelicula, statusText: 'Peliculas encontradas'});
  } catch (error) {
    res.status(error.status || 500).send(error);
  }
};

const getMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const pelicula = await peliculasModel.findById({ _id: id });
    res.status(200, `Pelicula encontrada por ${_id}`).send((pelicula));
  } catch (error) {
    res.status(error.status || 500).send(error);
  }
};

const postMovie = async (req, res) => {
  try {
    const { _idApi, meta: { comments: string, favs: number } } = req.body;
    const pelicula = await peliculasModel.create({ _idApi, meta: { comments: string, favs: number } });
    console.log(pelicula);
    res.status(200, "Pelicula creada").send((pelicula));
  } catch (error) {
    res.status(error.status || 500).send(error);
  }
};

const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const pelicula = await peliculasModel.findByIdAndDelete({ _id: id });
    console.log(pelicula);
    res.status(200, "Pelicula eliminada").send((pelicula));
  } catch (error) {
    res.status(error.status || 500).send(error);
  }
};

const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      _idApi,
      meta: { comments: string, favs: number }
    } = req.body;
    const pelicula = await peliculasModel.findByIdAndUpdate(id, { _idApi, meta: { comments: string, favs: number } });
    res.status(200, "Pelicula actualizada").send((pelicula));
  } catch (error) {
    res.status(error.status || 500).send(error);
  }
};

module.exports = {
  getAllMovies,
  getMovie,
  postMovie,
  deleteMovie,
  updateMovie,
};
