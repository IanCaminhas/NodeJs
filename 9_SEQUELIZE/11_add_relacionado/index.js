const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')

const User = require('./models/User')
const Address = require('./models/Address')

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

app.get('/users/:id', async (req, res) => {
    const id = req.params.id

    const user = await User.findOne({raw: true, where: {id: id}})

    res.render('userview', { user })

})

app.post('/users/delete/:id', async (req, res) =>{
    const id = req.params.id

    //Método para deletar um registro usando o sequelize
    await User.destroy({where: {id: id}})
    res.redirect('/')

})

app.get('/users/edit/:id', async (req, res) =>{
    const id = req.params.id

    //Método para buscar um registro usando o sequelize
    const user = await User.findOne({raw: true, where: {id: id}})
    res.render('useredit', {user})

})

app.post('/users/update', async (req, res) => {

    const id = req.body.id
    const name = req.body.name
    const occupation = req.body.occupation
    let newsletter = req.body.newsletter

    if(newsletter === 'on') {
      newsletter = true  
    } else {
        newsletter = false
    }


    /* Eu poderia fazer:
         const userData = {
            id = id,
            name = name,
            occupation = occupation ,
            newsletter = newsletter
         }

         Posso colocar da forma simplificada quando a chave for igual ao nome da proprieadade.
            const userData = {
                id,
                name,
                occupation,
                newsletter
            }

    */

    const userData = {
        id,
        name,
        occupation,
        newsletter
    }

    await User.update(userData, {where: {id: id}})

    res.redirect('/')

})

app.get('/', async (req, res) => {

    const users = await User.findAll({raw: true})
    //Saída: SHOW INDEX FROM `Users`
    console.log(users)
    res.render('home', {users: users})
})

app.post('/address/create', async(req, res) => {

    const UserId = req.body.UserId
    const street = req.body.street
    const number = req.body.number
    const city = req.body.city

    const address = {
        UserId,
        street,
        number,
        city
    }

   await Address.create(address)

    res.redirect(`/users/edit/${UserId}`)

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
