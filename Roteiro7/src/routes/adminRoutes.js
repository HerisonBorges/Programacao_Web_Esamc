const express = require('express');
const router = express.Router();

const {
    autenticarToken,
    autorizarRole
} = require('../middlewares/authMiddleware');

const {
    painelAdmin
} = require('../controllers/adminController');


router.get(
    '/admin',
    autenticarToken,
    autorizarRole('admin'),
    painelAdmin
);

module.exports = router;