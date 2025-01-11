//Arquivo responsável por inicializar a aplicação

//modulos externos
const inquirer = require('inquirer');
const chalk = require('chalk');

//modulos internos
const fs = require('fs');

console.log('Iniciamos o projeto conta bancária');

operacao();

function operacao() {
    /*
        A função inquirer.prompt() recebe um array de objetos, onde cada objeto representa uma pergunta que será feita ao usuário.
            Dentro do array, tenho um único objeto que define a pergunta.
            Essa função inquirer.prompt() é uma promise.
    */
    inquirer.prompt([
        {
            type: 'list', // Define o tipo da pergunta. No caso, é uma lista (list), que permite ao usuário selecionar uma opção.
            name: 'action', // O identificador da resposta. A resposta será armazenada como action no objeto de respostas. Nome da propriedade que armazenará a resposta
            message: 'O que você deseja fazer?', // Texto exibido ao usuário no terminal.
            choices: [ // Lista de opções que o usuário pode escolher. São as escolhas que o usuário pode fazer no terminal
                'Criar Conta',
                'Consultar Saldo',
                'Depositar',
                'Sacar',
                'Sair',
            ],
        }
    ])
    .then((answer) => {
        const action = answer['action'];  // Extrai a resposta da propriedade 'action'
        // console.log(action); Exibindo a resposta no terminal para teste

        if(action === 'Criar Conta') {
            criarContaBancaria();
        } else if (action === 'Depositar') {
            depositarValor();
        } else if (action === 'Consultar Saldo') {
            consultarSaldo();
        } else if(action === 'Sacar') {
            sacarValor();
        } else if(action === 'Sair') {
            console.log(chalk.bgBlue.black('Obrigado por usar o nosso banco!'));
            //Encerrando o programa, ou seja, a execução do sistema.
            process.exit();
        }
    })
    .catch((err) => console.log(err)); //Se ocorrer um erro durante o processo (por exemplo, problemas de entrada), o bloco catch realiza a captura.
}

//Estou criando uma conta
function criarContaBancaria() {
    console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco!'));
    console.log(chalk.green('Defina as opções da sua conta a seguir'));

    cadastrarContaBancaria();
}

function cadastrarContaBancaria() {

    inquirer.prompt([
        {
            name: 'nomeConta',
            message: 'Digite um nome para a sua conta:'
        }
    ]).then(answer => {
        // console.log(answer); Saída: { nomeConta: 'oi' }
        const nomeConta = answer['nomeConta'];

        //Somente para mostrar para o usuário o nome que ele escolheu
        console.info(nomeConta);

        //Se não existir o diretório contas, eu vou criar. Uma pasta vai ser criada
        if(!fs.existsSync('contas')) {
            fs.mkdirSync('contas');
        }

        //Se o nome da conta já existe, eu não vou deixar o usuário prosseguir.
        if(fs.existsSync(`contas/${nomeConta}.json`)) {
            console.log(chalk.bgRed.black('Esta conta já existe, escolha outro nome!'));

            //Como o nome já existe, eu vou chamar a função novamente para o usuário digitar outro nome
            cadastrarContaBancaria();
            //Isso é para impedir de prosseguir para as próximas linhas. Se não tiver o return, pode dar um bug.
            return;
        }

        /*
            Se a pasta existir. 
            E se o nome do arquivo não existir. 
            Agora vou criar a conta do usuário como um .json
        
            '{"saldo": 0}' - vai escrever no json. 
                Por isso o formato chave-valor. 
        */
        fs.writeFileSync(`contas/${nomeConta}.json`,'{"saldo": 0}', function (err) {
            console.log(err);
        });

        console.log(chalk.green('Parabéns, a sua conta foi criada!'));
        operacao();

    }).catch(err => console.log(err));

}

function depositarValor() {
    //Para qual conta o usuário vai querer depositar ?
    inquirer.prompt([
        {
            name: 'nomeConta',
            message: 'Qual o nome da sua conta?'
        }
    ]).then((answer) => {

        const nomeConta = answer['nomeConta'];

        /*Estou verificando se a conta existe. 
        Se a conta não existir, vou executar a função depositarValor() novamente. */
        if(!verificandoConta(nomeConta)) {
            return depositarValor();
        }

        inquirer.prompt([{
            name: 'quantia',
            message: 'Quanto você deseja depositar ?'
        },
        ]).then((answer) => {
            const quantia = answer['quantia'];

            //Adicionando quantia
            adicionandoQuantia(nomeConta, quantia);

        }).catch(err => console.log(err));


    }).catch(err => console.log(err));
}

function adicionandoQuantia(nomeConta, quantia) {
    const dadosConta = getConta(nomeConta);

    //Caso a quantia não for definida, vou exibir uma mensagem e executar a função depositarValor() novamente
    if(!quantia) {
        console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!'));
        return depositarValor();
    }

    dadosConta.saldo = parseFloat(quantia) + parseFloat(dadosConta.saldo);

    fs.writeFileSync(
        `contas/${nomeConta}.json`,
        JSON.stringify(dadosConta),
        function (err) {
            console.log(err);
        },
    );

    console.log(chalk.green(`Foi depositado o valor de R$${quantia} na sua conta`));
    operacao();
}

//Estou sacando um valor da conta do usuário
function sacarValor() {
    inquirer.prompt([
        {
            name:'nomeConta',
            message: 'Qual o nome da sua conta ?'
        }
    ]).then((answer) =>{
        const nomeConta = answer['nomeConta'];

        if(!verificandoConta(nomeConta)) {
            return sacarValor();
        }

        inquirer.prompt([
            {
                name: 'quantia',
                message: 'Quanto você deseja sacar ?'
            }
        ]).then((answer) => {
            const quantia = answer['quantia'];
            removerQuantiaDaConta(nomeConta, quantia);
        }).catch(err => console.log(err))

    }).catch()
}

function removerQuantiaDaConta(nomeConta, quantia) {
    const dadosConta = getConta(nomeConta);

    //Se a quantia não for definida, vou exibir um erro.
    if(!quantia) {
        console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!'));
        return sacarValor();
    }

    //Se a quantia for maior do que o saldo da conta, vou exibir um erro.
    if(quantia > dadosConta.saldo) {
        console.log(chalk.bgRed.black('Valor indisponível!'));
        return sacarValor();
    }

    dadosConta.saldo = parseFloat(dadosConta.saldo) - parseFloat(quantia);

    fs.writeFileSync(
        `contas/${nomeConta}.json`, 
        JSON.stringify(dadosConta), 
        function (err) {
            console.log(err);
        }, 
    );

    console.log(chalk.green(`Foi realizado um saque de R$${quantia} da sua conta!`));
    operacao();
}


function verificandoConta(nomeConta) {
    if(!fs.existsSync(`contas/${nomeConta}.json`)) {
        console.log(chalk.bgRed.black('Esta conta não existe, escolha outro nome!'));
        return false;
    }
    return true;
}

function getConta(nomeConta) {
    const contaJSON = fs.readFileSync(`contas/${nomeConta}.json`, {
        encoding: 'utf8',
        flag: 'r' //apenas quero ler o arquivo
    })

    return JSON.parse(contaJSON)
}

function consultarSaldo() {
    inquirer.prompt([
        {
            name: 'nomeConta',
            message: 'Qual o nome da sua conta ?'
        }
    ]).then((answer) => {
        const nomeConta = answer['nomeConta'];

        /*Verificando se a conta existe. 
        Se a conta não existe, vou executar a mesma função novamente. 
        Objetivo: usuário digitar novamente o nome para consultar o saldo. */
        if(!verificandoConta(nomeConta)) {
            return consultarSaldo();
        }

        const dadosConta = getConta(nomeConta);

        console.log(chalk.bgBlue.black(`Olá, o saldo da sua conta é de R$${dadosConta.saldo}`));
        //Depois de exibir, vou dar opção para o usuário realizar outra operação.
        operacao();

    }).catch(err => console.log(err));
}