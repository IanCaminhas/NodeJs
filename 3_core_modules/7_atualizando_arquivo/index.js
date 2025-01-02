/* Proposta da aula:
    Receber o nome do usuário e persistir nomes no arquivo.
    Mas agora é necessário manter as informações anteriores.
    Nada de substituir as informações anteriores.
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

          O método fs.writeFile() substitui tudo que está em um arquivo.
          Esse método não incrementa novas informações, apenas substitui a informação anterior.
          Para corrigir isso: 
                Vou usar o método appendFile(). 
        
          const nameNewLine = name + '\r\n';
                Por padrão, appendFile() coloca o texto um do lado do outro.
                Para solucionar esse impasse, é necessário colocar o \n.
                Assim, precisei dar um tratamento para a variável name.
                    Antigamente, estava persistindo a variável name diretamente.
            
            Como colocar a vírgula no final de cada linha ?
                const nameNewLine = name + ',\r\n';
        */
        const nameNewLine = name + '\r\n';
        fs.appendFile('arquivo.txt', nameNewLine, function(err, data){
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

