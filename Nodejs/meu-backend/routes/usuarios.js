const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Simulação de banco de dados em memória
const usuariosDB = [];

// POST /api/usuarios/registrar
router.post('/registrar', async (req, res) => {
    try {
        const { nome, email, senha } = req.body;

        if (!nome || !email || !senha) {
            return res.status(400).json({ erro: 'Nome, email e senha são obrigatórios!' });
        }

        const saltRounds = 10;
        const senhaCriptografada = await bcrypt.hash(senha, saltRounds);

        const novoUsuario = {
            id: Date.now(),
            nome,
            email,
            senha: senhaCriptografada
        };

        usuariosDB.push(novoUsuario);

        res.status(201).json({
            mensagem: 'Utilizador registado com sucesso!',
            usuario: { id: novoUsuario.id, nome: novoUsuario.nome, email: novoUsuario.email }
        });
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao processar o registo.' });
    }
});

// POST /api/usuarios/login
router.post('/login', async (req, res) => {
    try {
        const { email, senha } = req.body;

        // 1. Procurar o utilizador pelo email
        const usuario = usuariosDB.find(u => u.email === email);
        if (!usuario) {
            return res.status(401).json({ erro: 'Credenciais inválidas!' });
        }

        // 2. Comparar a senha digitada com o hash guardado
        const senhaValida = await bcrypt.compare(senha, usuario.senha);
        if (!senhaValida) {
            return res.status(401).json({ erro: 'Credenciais inválidas!' });
        }

        // 3. Gerar o Token JWT (válido por 1 hora)
        const token = jwt.sign(
            { id: usuario.id, email: usuario.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({
            mensagem: 'Login efetuado com sucesso!',
            token
        });
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao processar o login.' });
    }
});

module.exports = router;