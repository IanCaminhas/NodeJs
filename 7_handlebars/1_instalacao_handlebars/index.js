/*
1 - Vou precisar instalar o Express e o Handlebars para o correto funcionamento.
2 - Posso também utilizar o Nodemon para ajudar.
3 - No index preciso: 
	Importar os pacotes instalados.
	Adicionar ao Express a engine do Handlebars.
4 - É necessário criar uma view no diretório views com a extensão handlebars.
	A view vai conter o código HTML e as templates engines do Handlebars({{ }})
	Utilizo o método render para enviar a view para a requisição.

Para instalar o handlebars:
    npm install express express-handlebars

Instalei o nodemon também:
    npm install nodemon

*/

//Estou importando uma função
const express = require("express")
//Estou importando o módulo express-handlebars
const exphbs = require("express-handlebars")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    //Estou renderizando a view home
    res.render('home', { layout: false })
})

//Esse 3000 é a porta. Não quis colocar a porta em variável. Fiz hardcoded
//arrow function é a callback quando a aplicação é levantada.
app.listen(3000, () => {
    console.log('App funcionando!')
})



