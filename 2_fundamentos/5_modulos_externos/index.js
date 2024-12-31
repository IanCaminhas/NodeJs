/*
minimist é módulo que usamos para extrair os argumentos via linha de comando.
É um módulo que deixa mais intuitivo o processo de extração de informações enviadas via linha de comando.

Digite no terminal:
    node index.js --nome=Ian --profissao=desempregado
*/

const minimist = require('minimist');
const args = minimist(process.argv.slice(2))

//Saída: { _: [], nome: 'Ian' }
console.log(args);

const nome = args['nome'];
const profissao = args['profissao'];

/*
{ _: [], nome: 'Ian', profissao: 'desempregado' }
Ian   desempregado
*/
console.log(nome, ' ', profissao);