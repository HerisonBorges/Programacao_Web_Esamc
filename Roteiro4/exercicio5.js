const express = require('express');
const app = express();

const usuarios = [
    { id: 1, nome: 'Ana' },
    { id: 2, nome: 'Carlos' }
];


app.get('/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const usuario = usuarios.find(u => u.id === id);

    if (!usuario) {
        return res.status(404).json({
            erro: 'Usuário não encontrado'
        });
    }

    res.json(usuario);
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});