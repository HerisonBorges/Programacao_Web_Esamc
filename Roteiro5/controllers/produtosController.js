const produtos = [
    { id: 1, nome: 'Teclado' },
    { id: 2, nome: 'Mouse' },
    { id: 3, nome: 'Monitor' }
];


function listarProdutos(req, res) {
    res.json({
        mensagem: 'Sucesso',
        dados: produtos
    });
}


function buscarProduto(req, res) {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            mensagem: 'ID inválido'
        });
    }

    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({
            mensagem: 'Produto não encontrado'
        });
    }

    return res.json(produto);
}


function contarProdutos(req, res) {
    res.json({
        total: produtos.length
    });
}

module.exports = {
    listarProdutos,
    buscarProduto,
    contarProdutos
};