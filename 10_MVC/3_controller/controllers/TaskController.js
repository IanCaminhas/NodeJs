const Task = require('../models/Task')

MediaSourceHandle.exports = class TaskController {
    static createTask(req, res) {
        res.render('tasks/create')
    }
}