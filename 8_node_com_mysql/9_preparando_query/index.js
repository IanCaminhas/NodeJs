const express = require('express')
const exphbs = require('express-handlebars')
const pool = require('./db/conn')

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

    /*
        1 - Uma forma de defender de SQL Injection.
        2 - Posso utilizar interrogações em vez dos valores.
	        E substituir através de um segundo passo para a query ser executada corretamente.
        3 - Esta técnica deve ser utilizada em qualquer programa que vá para a produção.
    */
    const sql = `INSERT INTO livro (??, ??) VALUES (?, ?)`
    const data = ['titulo', 'qtd_paginas', titulo, qtd_paginas]

    pool.query(sql, data, function(err) {
        if (err) {
            console.log(err)
        }

        res.redirect('/livros')
    })
})

//Resgatando os livros do sistema
app.get('/livros', (req, res) =>{
    const sql = `SELECT * FROM livro`

    pool.query(sql, function (err, data) {
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
    
    const sql = `SELECT * FROM livro WHERE ?? = ?`

    const data = ['id', id]

    pool.query(sql, data, function(err, data) {
        if(err) {
            console.log(err)
            return
        }

        const livro = data[0]

        res.render('book', {livro})

    })
})

app.get('/livros/editar/:id', (req, res) => {
    const id = req.params.id

    const sql = `SELECT * FROM livro WHERE ?? = ?`
    const data = ['id', id]

    pool.query(sql, data, function(err, data){
        if(err) {
            console.log(err)
            return
        }

        const livro = data[0]
        res.render('editbook', {livro})
    })
})

app.post('/livros/atualizarlivro', (req, res) =>{
    const id = req.body.id
    const titulo = req.body.titulo
    const qtd_paginas = req.body.qtd_paginas

    const sql = `UPDATE livro SET ?? = ?, ?? = ? WHERE ?? = ?`
    const data = ['titulo', titulo, 'qtd_paginas', qtd_paginas, 'id', id]

    pool.query(sql, data, function(err){
        if(err) {
            console.log(err)
            return
        }

        res.redirect('/livros')
    })
})

app.post('/livros/remover/:id', (req, res) => {
    const id = req.params.id

    const sql = `DELETE FROM livro WHERE ?? = ?`
    const data = ['id', id]

    pool.query(sql, data,  function(err) {
        if(err) {
            console.log(err)
            return
        }

        res.redirect('/livros')
    })
})

app.listen(3000)