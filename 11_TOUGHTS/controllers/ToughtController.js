const Tought = require('../models/Tought')
const User = require('../models/User')

const { Op } = require('sequelize')

module.exports = class ToughtsController {
    static async showToughts(req, res) {
        let search = ''

        if(req.query.search) {
            search = req.query.search
        }

        let order = 'DESC'

        if(req.query.order === 'old') {
            order = 'ASC'
        } else {
            order = 'DESC'
        }
        
        //include: User => O usuário vai ser incluso na tarefa
        const toughtsData = await Tought.findAll({
            include: User,
            where: {
                title: {[Op.like]: `%${search}%`}
            },
            order: [['createdAt', order]]
        })

        //plain: true => Vão ser jogados no mesmo array o user e o tought
        const toughts = await toughtsData.map((result) => result.get({ plain: true }))

        let toughtsQty = toughts.length

        //0 para o handlebars não significa falso. Por isso esse tratamento com if. É uma limitação do handlebars 
        if(toughtsQty === 0) {
            toughtsQty = false
        }

        res.render('toughts/home', {toughts, search, toughtsQty})

    }

    static async dashboard(req, res) {
        const userId = req.session.userid

        const user = await User.findOne({
            where: {
                id: userId,
            },
            include: Tought, //Vai buscar todos os toughts(pensamentos) relacionados ao usuário. É o mesmo que o where do sql
            plain: true, 
        })

        /*Vai pegar apenas os dados.
        Se eu não fizer essa estrutura, outros dados virão juntos. 
        Em suma, eu estou ignorando os dados que não preciso
        Basta fazer um console.log() para ver todos os dados.
        (result) => result.datavalues -> Só vai retornar o que existe em dataValues.
        Em dataValues estão os dados de pensamento.
        */
       const toughts = user.Toughts.map((result) => result.dataValues)

        //Se o usuário não existir, vou redirecioná-lo para a página de login
        if(!user) {
            res.redirect('/login')
        }

        let emptyToughts = false

        if(toughts.length === 0) {
            emptyToughts = true
        }

        res.render('toughts/dashboard', {toughts, emptyToughts})
    }

    static createTought(req, res) {
        res.render('toughts/create')
    }

    static async createToughtSave(req, res) {
        
        const tought = {
            title: req.body.title,
            UserId: req.session.userid //Vou pegar o id da própria sessão. Não pegue via hidden, pois alguém mal-intencionado pode settar um id de outra pessoa.
        }

        try {
            await Tought.create(tought)
            req.flash('message', 'Pensamento criado com sucesso!')

            req.session.save(() => {
                res.redirect('/toughts/dashboard')
            })

       } catch (error) {
            console.log('Aconteceu um erro:'+ error)
       }
    }

    static async removeTought(req, res) {
        const id = req.body.id
        const userId = req.session.userid

        try {
            //UserId: UserId... Significa que o userId precisa ser igual ao UserId da session
            await Tought.destroy({where: {id: id}, UserId: userId})
            req.flash('message', 'Pensamento removido com sucesso!')

            req.session.save(() => {
                res.redirect('/toughts/dashboard')
            })
        } catch(error) {
            console.log('Aconteceu um erro: ' + error)
        }
       
    }

    static async updateTought(req, res) {
        const id = req.params.id

        const tought = await Tought.findOne({where: {id: id}, raw: true})

        res.render('toughts/edit', {tought})
    }

    static async updateToughtSave(req, res) {

        const id = req.body.id

        const tought = {
            title: req.body.title
        }

        try {

            await Tought.update(tought, {where: {id: id}})
            req.flash('message', 'Pensamento atualizado com sucesso!')
    
            req.session.save(() => {
                res.redirect('/toughts/dashboard')
            })

        } catch(error) {
            console.log('Aconteceu um erro:' + error)
        }

    }

}