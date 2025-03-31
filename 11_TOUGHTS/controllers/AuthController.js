const User = require('../models/User')
const bcrypt = require('bcryptjs')

module.exports = class AuthController {

    static login(req, res) {
        res.render('auth/login')
    }

    static async loginPost(req, res) {

        const {email, password} = req.body

        //Usuário existe ? Se não existe, o usuário colocou um email que não está no sistema.
        const user = await User.findOne({where: {email: email}})

        if(!user) {
            req.flash('message', 'Usuário não encontrado!')
            res.render('auth/login')
            return
        }

        //A senha informada no formulário bate com a senha do banco ?
        const passwordMatch = bcrypt.compareSync(password, user.password)

        if(!passwordMatch) {
            req.flash('message', 'Senha inválida!')
            res.render('auth/login')
            return
        }

        //Inicializando a sessão depois de passar por todas as verificações
        req.session.userid = user.id
            
        req.flash('message', 'Autenticação realizada com sucesso!')

        //Salvando a sessão
        req.session.save(() => {
            res.redirect('/')
        })

    }

    static register(req, res) {
        res.render('auth/register')
    }

    static async registerPost(req, res) {
        const {name, email, password, confirmpassword} = req.body

        //A senha é igual à confirmação de senha ?
        if(password != confirmpassword) {
            //Isso aqui é a flash message
            req.flash('message', 'As senhas não conferem, tente novamente!')
            res.render('auth/register')
            return
        }

        //Usuário existe ?
        const checkIfUserExists = await User.findOne({where: {email: email}})

        if(checkIfUserExists) {
            req.flash('message', 'O e-mail já está em uso!')
            res.render('auth/register')
            return
        }

        //create a password. Objetivo: dificultar a senha
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)

        const user = {
            name, 
            email,
            password: hashedPassword
        }

        try {
            const createdUser = await User.create(user)

            //Inicializando a sessão depois de cadastrar o usuário
            req.session.userid = createdUser.id
            
            req.flash('message', 'Cadastro realizado com sucesso!')

            //Salvando a sessão
            req.session.save(() => {
                res.redirect('/')
            })

        } catch(err) {
            console.log(err)
        }

    }

    static logout(req, res) {
        //Esse método vai remover a sessão do sistema
        req.session.destroy()
        //Renderizo a página de login para o usuário fazer login novamente
        res.redirect('/login')
    }
}