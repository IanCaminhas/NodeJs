const http = require('http');

/*Acessando a aplicação na porta 3000, vai ser possível acessar este servidor corrente. 
Assim, o usuário vai receber as respostas pertinentes. */
const port = 3000

const server = http.createServer((req,res) =>{
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    /*  Agora estou enviando HTML. 
        O servidor agora vai enviar HTML para o cliente.  
        O cliente vai receber esse HTML e renderizar no navegador. */
    res.end('<h1>Sou um HTML!</h1>');
});

/*Além da porta, posso declarar uma função de callback. 
No caso abaixo, estou informando ao usuário que a aplicação está rodando na porta 3000. */
server.listen(port, ()=>{
    console.log(`Servidor rodando na porta: ${port}`);
});

/* Para executar, basta digitar no terminal: node index.js
Se eu rodar localhost:3000 no navegador, vai aperecer 'Oi HTTP'
*/
