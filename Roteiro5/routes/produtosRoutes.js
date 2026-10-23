const express = require('express');
const router = express.Router();

const produtosController = require('../controllers/produtosController');


router.get('/total', produtosController.contarProdutos);

router.get('/', produtosController.listarProdutos);

router.get('/:id', produtosController.buscarProduto);

module.exports = router;