const express = require('express');
const app = express();
app.get('/usuario/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        id: 1,
        mensagem: 'Usuario Herison'
    });
});
app.listen(3000);