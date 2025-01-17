const express = require('express')
const app = express()
const port = 3000

const path = require('path')

const basePath = path.join(__dirname, 'templates')

//Importanto a rota do arquivo /users/index.js
const users = require('./users')

// ler o body
app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

var checkAuth = function (req, res, next) {
  req.authStatus = true

  if (req.authStatus) {
    console.log('Está logado, pode continuar')
    next()
  } else {
    console.log('Não está logado, faça o login para continuar!')
  }
}

app.use(checkAuth)

/* 
  /users é um prefixo. 
      Como assim ?
      Se no arquivos de rotas estiver '/add', a rota final será /users/add 
*/
app.use('/users', users)

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
  console.log(`App rodando na porta:${port}`)
})
