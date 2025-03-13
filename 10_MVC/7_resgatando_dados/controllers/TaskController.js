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

    static async showTasks(req, res) {
        //Resgatando todas as tarefas
        const tasks = await Task.findAll({raw: true})
        console.log(tasks)
        res.render('tasks/all', {tasks})
    }
}