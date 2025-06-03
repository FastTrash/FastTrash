const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sql = require('./db');  // Importa a conexão

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('API FastTrash está funcionando!');
});

app.get('/usuarios', async (req, res) => {
    try {
        const result = await sql.query`SELECT * FROM usuarios`;
        res.json(result.recordset);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar usuários');
    }
});

app.post('/usuarios', async (req, res) => {
    const { nome, email, senha, telefone, tipo } = req.body;

    try {
        await sql.query`
            INSERT INTO usuarios (nome, email, senha, telefone, tipo)
            VALUES (${nome}, ${email}, ${senha}, ${telefone}, ${tipo})
        `;
        res.status(201).send('Usuário cadastrado com sucesso!');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao cadastrar usuário');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
