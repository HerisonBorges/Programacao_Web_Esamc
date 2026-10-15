const express = require('express');
const app = express();
app.get('/api', (req, res) => {
    res.json({
        nome: 'Herison',
        idade: 34
    });
});
app.listen(3000);
