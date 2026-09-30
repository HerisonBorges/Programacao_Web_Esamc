require('dotenv').config();

const express = require('express');
const app = express();
const porta = process.env.PORT || 3000;

const usuariosRoutes = require('./routes/usuarios');
const autenticarToken = require('./routes/autenticacao'); // Importa o middleware

app.use((req, res, next) => {
    const dataHora = new Date().toISOString();
    console.log(`[${dataHora}] Método: ${req.method} | Rota: ${req.url}`);
    next();
});

app.use(express.json());

// Rotas públicas (login e registo)
app.use('/api/usuarios', usuariosRoutes);

// ROTA PROTEGIDA: só responde se o 'autenticarToken' deixar passar
app.get('/api/tarefas', autenticarToken, (req, res) => {
    res.json({
        mensagem: 'Acesso concedido à rota protegida!',
        usuarioAutenticado: req.usuario,
        tarefas: [
            { id: 1, titulo: 'Estudar JWT no Node.js' },
            { id: 2, titulo: 'Criar uma API RESTful' }
        ]
    });
});

app.listen(porta, () => {
    console.log(`Servidor a rodar na porta ${porta}`);
});