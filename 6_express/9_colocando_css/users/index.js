/*A pasta users é a rsponsável pelo módulo de rotas.

A ideia é retirar é desconcentrar as rotas do arquivo index.js
    Arquivo principal da aplicação.

    /users/index.js vai conter todas as rotas para usuários.
    /index.js não vai mais conter todas as rotas da aplicação.
        Vai conter apenas a rota do home.

    Posso criar outras rotas:
    /products/index.js
    /orders/index.js
*/

const express = require('express')

/*
É útil quando a aplicação cresce muito.

1 - Podemos unir várias rotas em um módulo.
	um módulo = um arquivo.
	Isso vai deixar nosso código mais organizado.

2 - Normalmente, crio uma pasta ou arquivo que contém as rotas.
	Geralmente as rotas representam uma entidade em comum. 
	Exemplos: users, products.

3 - Utilizo um novo objeto chamado Router e coloco as rotas nele.
	Depois vou exportar e importar o objeto no arquivo principal.
*/
const router = express.Router()
const path = require('path')

const basePath = path.join(__dirname, '../templates')

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`);
});

router.post('/save', (req, res) =>{
    console.log(req.body)

    const name = req.body.name;
    const age = req.body.age;
    
    console.log(`O nome do usuário é ${name} e ele tem ${age} anos`);

    res.sendFile(`${basePath}/userform.html`);
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log(`Estamos buscando pelo usuário: ${id}`);
    res.sendFile(`${basePath}/users.html`);
});

module.exports = router