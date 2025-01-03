/* 
Objetivo:
	Criar rotas com nodejs puro.
    Rotas com core modules do nodejs.

1 - Criar um sistema de roteamento simples com Node.js e seus Core Modules.
2 - As rotas são basicamente as páginas que acesso nos sites.
	Vamos falar mais sobre esse recurso em outros módulos.
	Se eu acesso o '/' do site, é um rota.
	Se eu acesso o '/produtos' no site, é uma outra rota.
	Se eu acesso o '/login' no site, é uma outra rota.
	Todas as páginas diferentes do meu site são rotas.
	Quando crio uma nova rota, é como se estivesse criando uma nova página.

3 - A ideia é identificar os arquivos acessados pela URL e retorná-los, se existirem.

É um sistema de roteamento super simples.
    Somente para compreender os conceitos básicos.

Aqui já teria uma aplicação simples rodando em nodejs.
*/

const http = require('http');
const fs = require('fs');
const url = require('url');

const port = 3000;

const server = http.createServer((req,res) =>{

    queryDaUrl = url.parse(req.url, true);
    /*Pegando o nome do arquivo. Estou pegando a string da posição 1 em diante.
        Se for /produtos.html, eu vou extrair a string produtos.html.
        Se for /login.html, eu vou extrair a string login.html */
    const filename = queryDaUrl.pathname.substring(1);

    // Na string extraída, existe a substring html ?
    if(filename.includes('html')) {
        //Quer dizer que a página existe. Assim, vou renderizar a página que o usuário requisitou
        if(fs.existsSync(filename)) {
            fs.readFile(filename, function(err, data){
                res.writeHead(200, {'content-type': 'text/html'});
                res.write(data);
                return res.end();
            });
        /*Quer dizer que a página não existe. Vou precisar renderizar uma página 404.
            Para ativar essa página, basta colocar um nome de arquivo inexistente na barra do navegador.
            Exemplo: seila.html
        */
        } else {
            //Página 404
            fs.readFile('404.html', function(err, data){
                res.writeHead(404, {'content-type': 'text/html'});
                res.write(data);
                return res.end();
            });
        }
    } 
});

server.listen(port, ()=>{
    console.log(`Servidor rodando na porta: ${port}`);
});

