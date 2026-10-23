const express = require('express');

const app = express();

app.use(express.json());

const usuariosRoutes = require('./Routes/usuariosRoutes');
const produtosRoutes = require('./Routes/produtosRoutes');

app.use('/usuarios', usuariosRoutes);
app.use('/produtos', produtosRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});