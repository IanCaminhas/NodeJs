const express = require("express");
const app = express();
const port = 3000;

const path = require("path");

const basePath = path.join(__dirname, 'templates');

/*
    express.urlencoded
        É um middleware que analisa o corpo da requisição para dados enviados em formato URL-encoded (como em formulários).
        Ele transforma esses dados em um objeto JavaScript acessível via req.body. 
        
        É um middleware do Express que permite à aplicação processar o corpo de requisições HTTP no formato JSON. 
        Ele converte automaticamente os dados enviados no corpo da requisição em um objeto JavaScript, que fica acessível via req.body.
        
        Em resumo:
            Lê o body.
    
    extended: true
        Permite a utilização de bibliotecas mais avançadas (como qs) para interpretar dados complexos, como objetos e arrays no corpo da requisição.

    Em resumo:
        Permite que a aplicação processe e entenda dados enviados no formato application/x-www-form-urlencoded, geralmente usado em formulários HTML.
            Formato application/x-www-form-urlencoded é usado em formulários HTML.    
*/
app.use(
    express.urlencoded({
        extended: true
    }),
);

/*
    Permite que a aplicação processe e entenda dados enviados no formato JSON em requisições HTTP. 
        Especialmente em métodos como POST e PUT.
*/
app.use(express.json());

app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`);
});

app.post('/users/save', (req, res) =>{
    //vai retornar um json
    console.log(req.body)

    const name = req.body.name;
    const age = req.body.age;
    
    console.log(`O nome do usuário é ${name} e ele tem ${age} anos`);

    res.sendFile(`${basePath}/userform.html`);
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    console.log(`Estamos buscando pelo usuário: ${id}`);
    res.sendFile(`${basePath}/users.html`);
});

app.get('/', (req, res) =>{
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});

