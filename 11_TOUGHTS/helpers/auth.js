/*
    Vai garantir que determinadas rotas sejam acessadas apenas se o usuário estiver autenticado.
*/

module.exports.checkAuth = function(req, res, next) {
    const userId = req.session.userid

    //Se o usuário não estiver autenticado, vou redirecioná-lo para a barra login
    if(!userId) {
        res.redirect('/login')
    }

    //Se tiver autenticado, deixo o usuário prosseguir. Ou seja, deixo o usuário acessar o que ele quiser.
    next()
}


