const usersModel = require('../models/users')

/**
 * get user por id
 * devuelve el usuario
 */
const getUserById = async (req, res) => {
  try {
    const { id } = req.params
    const user = await usersModel.findById({ _id: id })
    res.status(200, `Usuario encontrado por ${id}`).send(user)
  } catch (error) {
    res.status(error.status || 500).send(error)
  }
}

/**
 * get user por nombre (registro, comprobar que no existe usuario con el mismo nombre)
 * devuelve el usuario
 */
const getUserByName = async (req, res) => {
  try {
    const { nombre } = req.params
    const user = await usersModel.findOne({ nombre: nombre })
    res.status(200, `Usuario encontrado por ${nombre}`).send(user)
  } catch (error) {
    res.status(error.status || 500).send(error)
  }
}

/**
 * comprobar user por id y pass (login)
 * devuelve el usuario
 */
const checkLogin = async (req, res) => {
  try {
    const { nombre, pass } = req.params
    const user = await usersModel.findOne({ nombre: nombre, pass: pass })
    res.status(200, `Usuario ${nombre} con password ${pass}`).send(user)
  } catch (error) {
    res.status(error.status || 500).send(error)
  }
}

/**
 * crear usuario
 * devuelve el usuario
 */
const createUser = async (req, res) => {
  try {
    const { nombre, pass, listas, peliculas } = req.body
    const user = await usersModel.create({ nombre, pass, listas, peliculas })
    res.status(200, `Usuario creado`).send(user)
  } catch (error) {
    res.status(error.status || 500).send(error)
  }
}

/**
 * borrar usuario por id
 * devuelve el usuario
 */
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await usersModel.findByIdAndDelete({ _id: id })
    res.status(200, `Usuario eliminado por ${id}`).send(user)
  } catch (error) {
    res.status(error.status || 500).send(error)
  }
}

/**
 * actualizar usuario por id
 * devuelve el usuario con los datos sin modificar
 */
const updateUserInfo = async (req, res) => {
  try {
    const { id } = req.params
    const { nombre, pass } = req.body
    const user = await usersModel.findByIdAndUpdate(id, { nombre: nombre, pass: pass })
    res.status(200, `Datos usuario actualizado por ${id}`).send(user)
  } catch (error) {
    res.status(error.status || 500).send(error)
  }
}


module.exports = {
  getUserById,
  getUserByName,
  checkLogin,
  createUser,
  deleteUser,
  updateUserInfo
}
