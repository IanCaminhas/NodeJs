/*
Com o http: 
    Crio o server e altero a resposta baseado na URL acessada.
Com url: 
    Processo os parâmetros que vem pela query string para alterar a lógica do http.

Objetivo desta seção:
    O código vai estar condicionado com o que vem na url.
*/

const http = require('http');
const url = require('url');

const port = 3000

const server = http.createServer((req,res) =>{

    const urlInfo = url.parse(req.url, true);
    //Estou pegando o recurso do query parameter. Pego isso aqui: ?name=oi
    const name = urlInfo.query.name;

    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');

    if(!name) {
        //Se não vier o nome, vou solicitar a inserção do nome. Aí mando um HTML para o usuário.
        res.end('<h1>Preencehndo o seu nome:</h1><form method="GET"><input type="text" name="name"/> <input type="submit" value="Enviar"></form>');
    } else {
        //Se vier o nome no query params, eu imprimo o nome.
        res.end(`<h1>Seja bem-vindo ${name}!</h1>`);
    }

});

server.listen(port, ()=>{
    console.log(`Servidor rodando na porta: ${port}`);
});

