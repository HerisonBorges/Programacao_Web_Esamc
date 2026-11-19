
function tratarErros(err, req, res, next) {
    console.error(err);

    res.status(500).json({
        erro: 'Erro interno do servidor'
    });
}

module.exports = tratarErros;