const Task = require('../models/Task')

module.exports = class TaskController {
    static createTask(req, res) {
        res.render('tasks/create')
    }

    static async createTaskSave(req, res) {
        const task = {
            title: req.body.title,
            description: req.body.description,
            done: false //A tarefa já começa como falsa, ou seja, incompleta.
        }

        //Posso fazer validações
        //Processar dados. Exemplo: retirar os caracteres especiais.

        //Estou salvando no banco
        await Task.create(task)

        res.redirect('/tasks')
    }

    static async removeTask(req, res) {

        const id = req.body.id

        //Método do sequelize que realiza remoção de uma tarefa no banco
        await Task.destroy({where: {id: id}})

        res.redirect('/tasks')

    }

    static async updateTask(req, res) {
        const id = req.params.id

        //Método do sequelize que retorna um dado pelo id
        const task = await Task.findOne({where: {id: id}, raw: true})

        res.render('tasks/edit', { task })
    }

    static async updateTaskPost(req, res) {
        const id = req.body.id

        const task = {
            title: req.body.title,
            description: req.body.description
        }

        //Método do sequelize que edita a task no banco
        await Task.update(task, {where: {id}})

        res.redirect('/tasks')
    }

    //Função que altera o status da tarefa de pendente para finalizada e vice-versa
    static async toggleTaskStatus(req, res) {
        const id = req.body.id

        const task = {
            //Aqui foi utilizado o operador ternário
            done: req.body.done === '0' ? true : false
        }

        //Método do sequelize que edita a task no banco
        await Task.update(task, {where: {id}})

        res.redirect('/tasks')
    }

    static async showTasks(req, res) {
        //Resgatando todas as tarefas
        const tasks = await Task.findAll({raw: true})

        res.render('tasks/all', {tasks})
    }
}