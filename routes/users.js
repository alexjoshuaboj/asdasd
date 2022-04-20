const { getUser, postUser } = require('../controller/users');
const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/',getUser);
router.post('/',postUser);

module.exports = router;
