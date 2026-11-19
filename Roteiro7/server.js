require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json());

const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
app.get('/', (req, res) => {
    res.json({
        mensagem: 'API JWT funcionando!'
    });
});


app.use('/', authRoutes);
app.use('/', userRoutes);
app.use('/', adminRoutes);


app.use((req, res) => {
    res.status(404).json({
        erro: 'Rota não encontrada'
    });
});


const tratarErros = require('./src/middlewares/errorMiddleware');
app.use(tratarErros);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});