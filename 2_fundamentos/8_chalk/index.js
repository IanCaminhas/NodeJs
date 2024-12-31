/*
    chalk é um módulo externo.
    Para instalação, é necessário:
        npm install chalk@4.1.2 -E
            É preciso especificar a versão usada no curso.
*/
const chalk = require('chalk');

/*A mensagem paracerá em verde e em negrito
console.log(chalk.green.bold('Parabéns! Você está aprovado!'));
Perceba que posso ir encandeando atributos. 
Primeiro foi verde e depois negrito.
*/

const nota = 6;

if (nota >= 7) {
    //A mensagem irá aparecer em verde.
    console.log(chalk.green('Parabéns! Você está aprovado!'))
} else {
    //A mensagem virá em negrito e com cor de fundo vermelha
    console.log(chalk.bgRed.bold('Você precisa fazer a prova de recuperação!'));
}
