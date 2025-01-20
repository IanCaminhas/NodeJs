const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

//Configurando a pasta raiz do partials
const hbs = exphbs.create({
    partialsDir: ['views/partials'],
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {

    //Passando os itens para serem iterados na view pelo handlebars
    const itens = ["Item a", "Item b", "Item c"]

    res.render('dashboard', {itens})
})

app.get('/post', (req,res) => {

    const post = {
        titulo: 'Aprender Node.js',
        categoria: 'JavaScript',
        conteudo: 'Este artigo vai te ajudar a aprender Node.js...',
        numero_comentarios: 4
    }

    res.render('blogpost', {post})
})

app.get('/blog', (req, res) => {
    //array de objetos
    const posts = [
        {
            titulo: 'Aprender Node.js',
            categoria: 'JavaScript',
            conteudo: 'Este artigo vai te ajudar a aprender Node.js...',
            numero_comentarios: 4
        },
        {
            titulo: 'Aprender PHP',
            categoria: 'PHP',
            conteudo: 'Teste',
            numero_comentarios: 4
        },
        {
            titulo: 'Aprender Python',
            categoria: 'Python',
            conteudo: 'Teste',
            numero_comentarios: 4
        },
    ]

    res.render('blog', {posts})
})

app.get('/', (req, res) => {
    
    const usuario = {
        nome: "Ian",
        sobrenome: "Caminhas",
        idade: 30
    }
    
    const palavra = 'Teste'
    const auth = true
    const estaAprovado = true

    res.render('home', {usuario: usuario, palavra: palavra, auth, estaAprovado})
})


app.listen(3000, () => {
    console.log('App funcionando!')
})



