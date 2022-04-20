const { getLista, postLista } = require('../controller/listas');
const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/',getLista);
router.post('/',postLista);


module.exports = router;
