const express = require("express");
const app = express();
const port = 3000;

const path = require("path");

//'templates' é uma pasta do projeto
const basePath = path.join(__dirname, 'templates');

app.get('/', (req, res) =>{
    //Estou enviando HTML como resposta
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});

