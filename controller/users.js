const usersModel = require("../models/users");

const getAllUsers = async (req, res) => {
  try {
    const user = await usersModel.find();
    res.json(user, "Usuarios encontrados");
  } catch (error) {
    res.json(error);
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await usersModel.findById({ _id: id });
    res.json(user, "Usuario encontrado por _id");
  } catch (error) {
    res.json(error);
  }
};

const postUser = async (req, res) => {
  try {
    const { name, pass, _isAdmin } = req.body;
    const user = await usersModel.create({ name, pass, _isAdmin });
    res.json(user, "Usuario creado");
  } catch (error) {
    res.json(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await usersModel.findByIdAndDelete({ _id: id });
    res.json(user, "Usuario eliminado");
  } catch (error) {
    res.json(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await usersModel.findByIdAndUpdae({ _id: id });
    res.json(user, "Usuario actualizado");
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  getAllUsers,
  getUser,
  postUser,
  deleteUser,
  updateUser,
};
