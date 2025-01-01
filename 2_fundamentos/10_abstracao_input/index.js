const inquirer = require('inquirer');

/*
    É um array de perguntas.
    Cada pergunta será exibida no console para o usuário.
*/
inquirer.prompt([
    {
        name: 'pergunta1',
        message: 'Qual a primeira nota ?',
    }, 
    {
        name: 'pergunta2',
        message: 'Qual a segunda nota ?'
    },
]).then((answers) =>{
    /*
    Imprimindo as perguntas e as suas respectivas respostas.
    Saída: { pergunta1: '8', pergunta2: '10' }
    console.log(answers);
    */

    const media = (parseInt(answers.pergunta1) + parseInt(answers.pergunta2)) / 2;
    console.log(`A média é: ${media}`);
}).catch(err => console.log(err));

/*
Sempre que uso uma promise, tenho 2 possibilidades de métodos: o then() e o catch().
catch() tem a função de imprimir algum erro, caso todo o código apresentar problemas.

then()
    Quando a promessa se cumprir, eu vou executar algo.
    Posso encandear diversos then().

*/