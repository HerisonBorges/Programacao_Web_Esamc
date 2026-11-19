const express = require('express');
const router = express.Router();

const { autenticarToken } = require('../middlewares/authMiddleware');

const {
    meuPerfil
} = require('../controllers/userController');


router.get('/me', autenticarToken, meuPerfil);

module.exports = router;