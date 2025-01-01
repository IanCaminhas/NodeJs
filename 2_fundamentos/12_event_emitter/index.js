const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

/*
    Estou definindo o evento. 
    O nome do evento é start. 
    Posso colocar qualquer nome para o evento.
    O segundo parâmetro é uma função anônima que será executada quando o evento for disparado.

*/

eventEmitter.on('start', () => {
    console.log("Durante");
});

console.log('Antes');

//Emitindo o evento
eventEmitter.emit('start');

console.log('Depois');

/*Saída do programa:
Antes
Durante
Depois
*/