/* Proposta da aula:
Receber o nome do usuário e persistir esse nome no arquivo.
Problema desta aula:
    O método fs.writeFile() substitui tudo que está em um arquivo.
*/

const http = require('http');
const fs = require('fs');
const url = require('url');

const port = 3000

const server = http.createServer((req,res) =>{

    urlInfo = url.parse(req.url, true);
    //Pegando o campo name do formulário
    const name = urlInfo.query.name;

    if(!name) {
        fs.readFile('index.html', function(err, data){
            res.writeHead(200, {'content-type': 'text/html'});
            res.write(data);
            return res.end();
        });
    } else {
        /*A função executa algo quando finalizar a escrita.
                Quando terminar a escrita no arquivo, vou ser redirecionado novamente para localhost:3000 e enviar o status code 302.
                A barra(Location: '/') representa o index.
                Apágina exibida será o index.html.

          O método writeFile() substitui tudo que está em um arquivo.
          Esse método não incrementa novas informações, apenas substitui a informação anterior.

        */
        fs.writeFile('arquivo.txt', name, function(err, data){
            res.writeHead(302, {
                Location: '/',
            });
            return res.end();
        });
    }

});

server.listen(port, ()=>{
    console.log(`Servidor rodando na porta: ${port}`);
});

