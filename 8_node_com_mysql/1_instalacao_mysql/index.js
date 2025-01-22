const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req,res) =>{
    res.render('home')
})

/*Essa parte do código cria uma conexão com um banco de dados MySQL usando a biblioteca mysql no Node.js. 

const conn = mysql.createConnection({...}):
    Essa linha cria uma conexão com o banco de dados usando o método createConnection da biblioteca mysql.
    O objeto passado como parâmetro contém as configurações necessárias para estabelecer a conexão.
*/
const conn = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql1'
})
/*
Esse código estabelece uma conexão com o banco de dados MySQL. 
    Caso bem-sucedida, inicia um servidor Node.js escutando na porta 3000.
    
O método connect tenta estabelecer a conexão com o banco de dados MySQL.
    Ele recebe como argumento uma função de callback que é executada quando a tentativa de conexão termina.
    O parâmetro err representa qualquer erro que possa ter ocorrido ao tentar se conectar.
*/
conn.connect(function(err) {
    if(err) {
        console.log(err)
    }

    console.log('Conectou ao MySQL!')
    app.listen(3000)

})
