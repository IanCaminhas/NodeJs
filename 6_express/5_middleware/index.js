const express = require("express");
const app = express();
const port = 3000;

const path = require("path");

//'templates' é uma pasta do projeto
const basePath = path.join(__dirname, 'templates');

/*Testando para ver se o usuário está logado.
next() é uma função anônima do middleware. Essa função next() serve para seguir para outra etapa. */
const checkAuth = function(req, res, next) {
    req.authStatus = true;

    /*
        Bifurcação da lógica de login.
        No lugar dos console.log(), eu posso renderizar uma página.
        Estou dando next() para todo caminho da bifurcação.

        Se eu não colocar esse next(), a página vai ficar carregando infinitamente(o loading é travado).
            Quando a autenticação for finalizada(req.authStatus = true ou req.authStatus = false), o next() fala 
            para ir para a próxima etapa. 
            A próxima etapa é res.sendFile(`${basePath}/index.html`);

            Mesmo se não estiver logado(no caso o else), eu estou dando o next() para a próxima etapa(res.sendFile(`${basePath}/index.html`)).
                Somente para não travar a aplicação.
    */
    if(req.authStatus) {
        console.log('Está logado, pode continuar');
        next();
    } else {
        console.log('Não está logado, faça o login para continuar');
        next();
    }
}

//Usando um middleware de autenticação
app.use(checkAuth);

app.get('/', (req, res) =>{
    //Estou enviando HTML como resposta
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});

