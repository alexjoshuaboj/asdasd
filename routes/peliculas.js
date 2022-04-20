const { getMovie, postMovie, deleteMovie, getMovieById, updateMovie } = require('../controller/peliculas');
const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/',getMovie);
router.get('/:id',getMovieById);
router.post('/',postMovie);
router.delete('/:id',deleteMovie);
router.put('/:id',updateMovie);

module.exports = router;
