const jwt = require('jsonwebtoken');

function autenticarToken(req, res, next) {
    // 1. Captura o cabeçalho 'Authorization' enviado pelo cliente
    const authHeader = req.headers['authorization'];

    // O formato enviado é: "Bearer TOKEN_AQUI"
    const token = authHeader && authHeader.split(' ')[1];

    // Se o token não for fornecido
    if (!token) {
        return res.status(401).json({ erro: 'Acesso negado! Token não fornecido.' });
    }

    // 2. Valida o token com a chave secreta
    jwt.verify(token, process.env.JWT_SECRET, (err, usuarioDecodificado) => {
        if (err) {
            return res.status(403).json({ erro: 'Token inválido ou expirado!' });
        }

        // Anexa os dados do utilizador na requisição para uso posterior
        req.usuario = usuarioDecodificado;

        // Continua para a rota desejada
        next();
    });
}

module.exports = autenticarToken;