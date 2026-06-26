const express = require('express');
const app = express();
app.use(express.json());

app.get('/',(req, res) => {
    res.json({ message: "meu servidor no ar!" });
});

//ex1
app.get('/sobre', (req, res) => {
    res.json({ aluno: "emanueli", disciplina: "backend", ano: 2026});
});