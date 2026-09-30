const express = require('express');
const app = express();
const porta = 3000;

// Rota Principal
app.get('/', (req, res) => {
    res.send('Servidor Express a funcionar!');
});

// Rota de API retornando JSON
app.get('/api/usuario', (req, res) => {
    res.json({
        id: 1,
        nome: 'Herison',
        cargo: 'Desenvolvedor'
    });
});

app.listen(porta, () => {
    console.log(`Servidor Express a rodar em http://localhost:${porta}`);
});