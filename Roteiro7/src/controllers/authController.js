const jwt = require('jsonwebtoken');
const usuarios = require('../data/users');


function cadastrar(req, res) {
    const { usuario, senha } = req.body;


    if (!usuario || !senha) {
        return res.status(400).json({
            erro: 'Preencha usuario e senha'
        });
    }

    if (usuario.length < 3 || senha.length < 3) {
        return res.status(400).json({
            erro: 'Usuario e senha devem ter pelo menos 3 caracteres'
        });
    }

    const existente = usuarios.find(
        u => u.usuario === usuario
    );

    if (existente) {
        return res.status(409).json({
            erro: 'Usuário já cadastrado'
        });
    }


    const novoUsuario = {
        id: usuarios.length + 1,
        usuario: usuario,
        senha: senha,
        role: 'user'
    };

    usuarios.push(novoUsuario);

    res.status(201).json({
        mensagem: 'Usuário cadastrado com sucesso',
        usuario: {
            id: novoUsuario.id,
            usuario: novoUsuario.usuario,
            role: novoUsuario.role
        }
    });
}


function login(req, res) {
    const { usuario, senha } = req.body;

    if (!usuario || !senha) {
        return res.status(400).json({
            erro: 'Preencha usuario e senha'
        });
    }

    const user = usuarios.find(
        u => u.usuario === usuario && u.senha === senha
    );

    if (!user) {
        return res.status(401).json({
            erro: 'Credenciais inválidas'
        });
    }


    const token = jwt.sign(
        {
            id: user.id,
            usuario: user.usuario,
            role: user.role
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRES_IN || '2m'
        }
    );

    res.json({
        mensagem: 'Login realizado com sucesso',
        token
    });
}

module.exports = {
    cadastrar,
    login
};