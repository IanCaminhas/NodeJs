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

app.get('/users/create', (req, res) => {
    res.render('adduser')
})

app.post('/users/create', async (req,res) =>{
    const name = req.body.name
    const occupation = req.body.occupation
    let newsletter = req.body.newsletter

    //Quando o campo ficar checked, o atributo 'on' vem no body
    if(newsletter === 'on') {
        newsletter = true;
    } else {
        newsletter = false
    }

    console.log(req.body)

    //Esse User.create() é do sequelize
    await User.create({name, occupation, newsletter})

    res.redirect('/')

})


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
