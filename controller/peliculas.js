const peliculasModel = require("../models/peliculas");

const getAllMovies = async (req, res) => {
  try {
    const pelicula = await peliculasModel.find();
    res.json(pelicula, "Peliculas encontrada");
  } catch (error) {
    res.json(error);
  }
};

const getMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const pelicula = await peliculasModel.findById({ _id: id });
    res.json(pelicula, "Pelicula encontrada por _id");
  } catch (error) {
    res.json(error);
  }
};

const postMovie = async (req, res) => {
  try {
    const {
      _idApi,
      meta: { comments: string, favs: number },
    } = req.body;
    const pelicula = await peliculasModel.create({ _idApi, meta: { comments: string, favs: number } });
    res.json(pelicula, "Pelicula creada");
  } catch (error) {
    res.json(error);
  }
};

const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    await peliculasModel.findByIdAndDelete({ _id: id });
    res.json("Pelicula eliminada");
  } catch (error) {
    res.json(error);
  }
};

const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      _idApi,
      meta: { comments: string, favs: number },
    } = req.body;
    await peliculasModel.findByIdAndUpdate(id, { _idApi, meta: { comments: string, favs: number } });
    res.json("Pelicula actualizada");
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  getAllMovies,
  getMovie,
  postMovie,
  deleteMovie,
  updateMovie,
};
