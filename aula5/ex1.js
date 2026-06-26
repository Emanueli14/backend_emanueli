const express = require('express');
const app = express();

app.get('/sobre', (req, res) => {
  res.json({
    nome: 'Emanueli',
    disciplina: 'Backend',
    ano: 2024
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});