//Model que salva o endereço do usuário

const {DataTypes} = require('sequelize')
const db = require('../db/conn')
const User = require('./User')

const Address = db.define('Address', {
    street: {
        type: DataTypes.STRING,
        required:true,
    },
    number: {
        type: DataTypes.STRING,//Poderia ser inteiro, mas foi escolhido string para contemplar os apartamentos. Exemplo: 12B
        required: true,
    },
    city: {
        type: DataTypes.STRING,
        required: true,
    }
})

//Um usuário está assoaciado a vários endereços.
User.hasMany(Address)

/*belongsTo significa pertence a. 
Portanto, Address pertence ao model User. 
Address vai ter um id_user como FK
Portanto: O endereço pertence a um usuário.
*/
Address.belongsTo(User)

module.exports = Address