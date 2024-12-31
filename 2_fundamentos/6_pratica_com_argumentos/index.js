//Módulo externo. Ou seja, baixado de um outro autor. 
const minimist = require('minimist');

//Módulo interno. Ou seja, módulo criado por mim.
const soma = require('./soma').soma

const args = minimist(process.argv.slice(2));

/*Recebendo os dois números via terminal.
Basta digitar no terminal:
    node index.js --num1=1 --num2=2

Os dois números são representados pelos argumentos num1 e num2.

*/
const num1 = parseInt(args['num1']);
const num2 = parseInt(args['num2']);

//Saída: 3
soma(num1, num2);