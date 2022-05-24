const usersModel = require("../models/users");

const getAllUsers = async (req, res) => {
  try {
    const user = await usersModel.find();
    res.status(200, "Usuarios encontrados").send(user);
  } catch (error) {
    res.status(error.status || 500).send(error);
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await usersModel.findById({ _id: id });
    res.status(200, `Usuario encontrado por ${id}`).send(user);
  } catch (error) {
    res.status(error.status || 500).send(error);
  }
};

const postUser = async (req, res) => {
  try {
    const { name, pass, _isAdmin } = req.body;
    const user = await usersModel.create({ name, pass, _isAdmin });
    res.status(200, `Usuario creado`).send(user);
  } catch (error) {
    res.status(error.status || 500).send(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await usersModel.findByIdAndDelete({ _id: id });
    res.status(200, `Usuario eliminado por ${id}`).send(user);
  } catch (error) {
    res.status(error.status || 500).send(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await usersModel.findByIdAndUpdae({ _id: id });
    res.status(200, `Usuario actualizado por ${id}`).send(user);
  } catch (error) {
    res.status(error.status || 500).send(error);
  }
};

module.exports = {
  getAllUsers,
  getUser,
  postUser,
  deleteUser,
  updateUser,
};
