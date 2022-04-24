const { getAllListas, getLista, postLista, deleteLista, updateLista } = require("../controller/listas");
const express = require("express");
const router = express.Router();

/* GET lists listing. */
router.get("/", getAllListas);
router.get("/:id", getLista);
router.post("/", postLista);
router.delete("/:id", deleteLista);
router.put("/:id", updateLista);

module.exports = router;
