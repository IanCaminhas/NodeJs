const http = require('http');

/*Acessando a aplicação na porta 3000, vai ser possível acessar este servidor corrente. 
Assim, o usuário vai recebr as respostas pertinentes. */
const port = 3000

const server = http.createServer((req,res) =>{
    /*Escevendo a resposta para o usuário. 
    Estou retornando texto. 
    Posso retornar HTML também. */
    res.write('Oi HTTP');
    //Finalizando a resposta. Se não finalizar, fica carregando eternamente e não sai nada.
    res.end();
});

/*Além da porta, posso declarar uma função de callback. 
No caso abaixo, estou informando ao usuário que a aplicação está rodando na porta 3000. */
server.listen(port, ()=>{
    console.log(`Servidor rodando na porta: ${port}`);
});

/* Para executar, basta digitar no terminal: node index.js
Se eu rodar localhost:3000 no navegador, vai aperecer 'Oi HTTP'
*/
