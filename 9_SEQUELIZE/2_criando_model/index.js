const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')

const User = require('./models/User')

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

/*Houve mudança, pois antes era assim: app.listen(3000)
Quando conectar com o banco de dados, aí vou subir a aplicação na porta 3000 */
conn.sync().then(() => {
    app.listen(3000)
}).catch((err) => console.log(err))
