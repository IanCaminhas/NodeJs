const http = require('http');
const fs = require('fs');

const port = 3000

/*Agora não estou enviando um texto, estou enviando um HTML.
Ao inspecionar a página, tenho todas as tags HTML. 
*/
const server = http.createServer((req,res) =>{
    fs.readFile('mensagem.html', function(err, data){
    //data é conteúdo do arquivo
    //err é o erro lançado caso houver problemas no processamento do arquivo 
        /*  
            res.writeHead(200, {'content-type': 'text/html'}) é igual a:
                res.statusCode = 200;
                res.setHeader('Content-type', 'text/html');
            Portanto, é uma outra forma de escrita mais simples.
        */
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(data);
        return res.end();

    });
});

server.listen(port, ()=>{
    console.log(`Servidor rodando na porta: ${port}`);
});

