const {
  getUserById,
  getUserByName,
  checkLogin,
  createUser,
  deleteUser,
  updateUserInfo
} = require('../controllers/users');
const express = require('express');
const router = express.Router();

router.get('/:id', getUserById);
router.get('/checkRegistro/:nombre', getUserByName);
router.get('/checkLogin/:nombre/:pass', checkLogin);
router.post('/', createUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUserInfo);

module.exports = router;
