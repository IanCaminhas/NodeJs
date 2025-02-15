const {DataTypes} = require('sequelize')

const db = require('../db/conn')

//Não é necessário definir o id, pois o próprio sequelize vai criar automaticamente
const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false //Esse campo pode receber o valor nulo ? false para não e true para sim
    },
    occupation: { //occupation = profissão
        type: DataTypes.STRING,
        required: true //Campo de preenchimento obrigatório
    },
    newsletter: { //O usuário pode receber notificações ?
        type: DataTypes.BOOLEAN, //Vai preencher com 0 ou 1 
    },
})

module.exports = User