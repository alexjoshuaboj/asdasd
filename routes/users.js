const { getAllUsers, getUser, postUser, deleteUser, updateUser } = require("../controller/users");
const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", getAllUsers);
router.get("/:id", getUser);
router.post("/", postUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

module.exports = router;
