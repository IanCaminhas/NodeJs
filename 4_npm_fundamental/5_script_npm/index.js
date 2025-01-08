/*
Instalei o chalk em ambiente de desenvolvimento:
    npm install --save-dev chalk@4.1.2 -E 
*/

const _ = require('lodash');
const chalk = require('chalk');

const a = [1, 2, 3, 4, 5];
const b = [2, 4, 6, 7, 8];

/*
Estou listando a diferença entre os dois arrays. 
    Faço isso por meio do pacote lodash.
*/
const diff = _.difference(a,b);

//Saída: [ 1, 3, 5 ] -> Esses números não fazem parte do array b.
console.log(chalk.bgRed.bold(diff));

