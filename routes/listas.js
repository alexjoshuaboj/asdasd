const { getListaById,getListasByUserId, getListaByIdUserandName, createLista, deleteLista,  addPelicula, deletePelicula } = require('../controllers/listas');
const express = require('express');
const router = express.Router();

router.get('/:id', getListaById);
router.get('/all/:iduser', getListasByUserId);
router.get('/:iduser/:nombre', getListaByIdUserandName);
router.post('/', createLista);
router.delete('/:id', deleteLista);
router.put('/addPelicula/:id/:idpeli', addPelicula);
router.put('/deletePelicula/:id/:idpeli', deletePelicula);

module.exports = router;