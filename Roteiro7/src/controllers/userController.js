
function meuPerfil(req, res) {
    res.json({
        mensagem: 'Acesso autorizado',
        usuario: req.usuario
    });
}

module.exports = {
    meuPerfil
};