const {
  getPeliculaById,
  getPeliculasByUserId,
  getPeliculaByIdUserAndIdmoviedb,
  createPelicula,
  updatePelicula,
  deletePelicula,
} = require('../controllers/peliculas');
const express = require('express');
const router = express.Router();

router.get('/:id', getPeliculaById);
router.get('/all/:iduser', getPeliculasByUserId);
router.get('/:iduser/:idmoviedb', getPeliculaByIdUserAndIdmoviedb);
router.post('/', createPelicula);
router.put('/:id', updatePelicula);
router.delete('/:id', deletePelicula);

module.exports = router;
