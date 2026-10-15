const express = require('express');
const app = express();

app.get('/busca', (req, res) => {
    const nome = req.query.nome;

    res.json({
        resultado: nome
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});