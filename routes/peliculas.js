const { getAllMovies, getMovie, postMovie, deleteMovie, updateMovie } = require("../controller/peliculas");
const express = require("express");
const router = express.Router();

/* GET movies listing. */
router.get("/", getAllMovies);
router.get("/:id", getMovie);
router.post("/", postMovie);
router.delete("/:id", deleteMovie);
router.put("/:id", updateMovie);

module.exports = router;
