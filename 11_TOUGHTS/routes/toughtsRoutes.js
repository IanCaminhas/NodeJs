const express = require('express')
const router = express.Router()
const ToughtController = require('../controllers/ToughtController')

//helper - Middleware configurado no arquivo helpers/auth.js
const checkAuth = require('../helpers/auth').checkAuth

//Sempre que a rota for batida, checkAuth será executado. Sempre que precisar proteger uma rota, basta colocar checkAuth.
router.get('/add', checkAuth, ToughtController.createTought)
router.post('/add', checkAuth, ToughtController.createToughtSave)
router.get('/edit/:id', checkAuth, ToughtController.updateTought)
router.post('/edit', checkAuth, ToughtController.updateToughtSave)
router.get('/dashboard', checkAuth, ToughtController.dashboard)
router.post('/remove', checkAuth, ToughtController.removeTought)
router.get('/', ToughtController.showToughts)

module.exports = router 

