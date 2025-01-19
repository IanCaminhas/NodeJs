const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

app.get('/', (req, res) => {
    
    const usuario = {
        nome: "Ian",
        sobrenome: "Caminhas",
        idade: 30
    }
    
    const palavra = 'Teste'
    const auth = true

    //basta mudar par ativar o else
    const estaAprovado = true

    res.render('home', {usuario: usuario, palavra: palavra, auth, estaAprovado})
})

app.listen(3000, () => {
    console.log('App funcionando!')
})



