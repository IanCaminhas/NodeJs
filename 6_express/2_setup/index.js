/*
Instalação express:
    npm install express
*/

//Importando o express
const express = require("express");
//Variável app executa o express
const app = express();
const port = 3000;

/*
    get úm método HTTP.
    '/' é a rota. 
    Req são os dados da requisição enviada pelo usuário. 
    res serve para elaborar a resposta para o usuário. 
    (req, res) =>{}
        Função anônima para dar fim à requisição do usuário.
        Ou seja, o que deve acontecer quando usuário acessar a rota '/'.
*/
app.get('/', (req, res) =>{
    res.send('Olá Mundo!!');
});

/*Estou configurando a aplicação para ouvir requisições em uma porta específica.

() => { ... }
    É uma arrow function que define o que será feito quando o servidor iniciar.
    Após o servidor começar a escutar a porta, a função de callback é executada.
*/
app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});

/*
Para acessar a funcionalidade da rota '/':
    http://localhost:3000/
    
    Basta digitar o endereço no navegador.
*/