const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('bem vindo');
});

app.get('/sobre', (req, res) => {
    res.send('Sobre o sistema');
});

app.get('/contato', (req, res) => {
    res.send('Contato Herison');
});
app.listen(3000, () => {

    console.log('Servidor rodando');
});