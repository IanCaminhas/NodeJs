const { Sequelize } = require('sequelize')

//dialect -> qual banco desejo integrar ?
const sequelize = new Sequelize('nodesequelize2', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

/* Esse código precisa ser executado apenas uma vez. É só um "ping".
A execução apenas uma vez é somente para autenticar no banco de dados.
try {
    sequelize.authenticate()
    console.log('Conectamos com sucesso com o sequelize!')

} catch(err) {
    console.log('Não foi possível conectar: ', error)
}
*/
module.exports = sequelize

