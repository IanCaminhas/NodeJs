const express = require("express");
const app = express();
const port = 3000;

const path = require("path");

//'templates' é uma pasta do projeto
const basePath = path.join(__dirname, 'templates');

/*Deixar a rora '/' sempre por último.
Todas as rotas tem a barra('/') no começo.
Se eu colocar a rota '/' no começo, ela sempre será a executada.
    Porque todas as rotas possuem a '/' no começo.

Também posso ter rotas iguais, porém com métodos HTTP diferentes.
*/

//Rota com parâmetro dinâmico
app.get('/users/:id', (req, res) => {
    //Pegando o id do usuário pela requisição.
    const id = req.params.id;

    /*Após a leitura do id do usuário, posso resgatar um usuário do banco de dados.
        Essa mensagem vai aparecer no console do nodemon.
            Exemplo: Estamos buscando pelo usuário: 5
    */
    console.log(`Estamos buscando pelo usuário: ${id}`);
    /*Estou enviando HTML como resposta. Para chegar nessa página, basta digitar no navegador:
        http://localhost:3000/users/5
    */
    res.sendFile(`${basePath}/users.html`);
});

app.get('/', (req, res) =>{
    //Estou enviando HTML como resposta
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});

