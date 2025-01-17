const express = require('express')
const app = express()
const port = 3000

const path = require('path')

const basePath = path.join(__dirname, 'templates')

/*
1 - Para inserir CSS nas páginas e arquivos estáticos, vou precisar de um middleware.
    Esse middleware é o express.static;
2 - Preciso colocar um diretório base, que normalmente é o public.
	  E criar os estáticos a partir desta pasta.
	
	  Em resumo:
		  public é onde ficam os assets.
		  assets são os arquivos css, arquivos javaScrpit para animações, imagens, etc.
		  Formatos dos assets: .img, .css, .js, etc.
	
3 - No HTML podesso acessar o caminho relativo após a pasta definida, e pronto!
    <link rel="stylesheet" href="/css/styles.css">
	  Não preciso de href="/public/css/styles.css">
  
  Em resumo:
      //Arquivos estáticos. public é a pasta onde ficam os arquivos estáticos
*/

app.use(express.static('public'))

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

/*
  1 - Para criar uma página 404, ou seja, quando o usuário acessa uma página que não existe.
	Basta criar um novo middleware abaixo de todas as rotas. 
	
	Esse middleware vai: 
		Responder com o status 404.
		E enviar um arquivo de template referente a página.

  Para testar, basta digitar no navegador: http://localhost:3000/awsdddf
    Assim, a página 404 vai aparecer.
*/
app.use(function(req, res, next) {
  res.status(404)
  res.sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {
  console.log(`App rodando na porta:${port}`)
})
