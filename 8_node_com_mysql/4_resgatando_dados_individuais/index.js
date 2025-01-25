const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req,res) =>{
    res.render('home')
})

//Inserindo livros no sistema
app.post('/livros/inserirlivro', (req, res) => {
    const titulo = req.body.titulo
    const qtd_paginas = req.body.qtd_paginas

    const sql = `INSERT INTO livro (titulo, qtd_paginas) VALUES ('${titulo}', '${qtd_paginas}')`

    conn.query(sql, function(err) {
        if (err) {
            console.log(err)
        }

        res.redirect('/livros')
    })
})

//Resgatando os livros do sistema
app.get('/livros', (req, res) =>{
    const sql = `SELECT * FROM livro`

    conn.query(sql, function (err, data) {
      if (err) {
        console.log(err)
        return
      }
  
      const livros = data
  
      console.log(data)
  
      res.render('books', { livros })
    })

})

//Buscando um dado específico
app.get('/livros/:id', (req, res) => {
    const id = req.params.id
    
    const sql = `SELECT * FROM livro WHERE id = ${id}`

    conn.query(sql, function(err, data) {
        if(err) {
            console.log(err)
            return
        }

        const livro = data[0]

        res.render('book', {livro})

    })
})

const conn = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql1'
})

conn.connect(function(err) {
    if(err) {
        console.log(err)
    }

    console.log('Conectou ao MySQL!')
    app.listen(3000)

})
