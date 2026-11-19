
function painelAdmin(req, res) {
    res.json({
        mensagem: 'Bem-vindo à área administrativa!',
        usuario: req.usuario.usuario,
        permissao: req.usuario.role
    });
}

module.exports = {
    painelAdmin
};