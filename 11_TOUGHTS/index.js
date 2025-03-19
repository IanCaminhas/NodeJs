const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')

const app = express()

const conn = require('./db/conn')

//Models
const Tought = require('./models/Tought')
const User = require('./models/User')

//template engine
app.engine('handlebars', exphbs.engine()) 
app.set('view engine', 'handlebars')

//receber resposta do body
app.use(
    express.urlencoded({
        extended: true
    })
)

//middleware para receber os dados no formato json
app.use(express.json())

//session middleware
app.use(
    session({
        name: "session",
        secret: "nosso_secret",
        resave: false,//Caiu a sessão, vai desconectar
        saveUninitialized: false,
        store: new FileStore({
            logFn: function() {},
            path: require('path').join(require('os').tmpdir(), 'sessions')
        }),
        cookie: {
            secure: false,
            maxAge: 360000, //Tempo de duração. Equivalente a um dia
            expires: new Date(Date.now() + 360000),//Estou forçando a expiração automática em algum tempo. Vai expirar em um dia.
            httpOnly: true
        }
    })
)

// flash messages
app.use(flash())

// public path - são arquivos que equivalem ao assets: imagens, arquivos .css, .js
app.use(express.static('public'))

//Salvando a sessão na resposta
app.use((req, res, next) =>{

    if(req.session.userid) {
        res.locals.session = req.session
    }

    next()

})

conn
    //.sync({ force: true })
    .sync()
    .then(() => {
        app.listen(3000)
    })
    .catch((err) => console.log(err))