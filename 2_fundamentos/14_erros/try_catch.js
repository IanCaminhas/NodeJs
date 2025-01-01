/* 
Fazendo try_catch para uma operação não permitida.
A operação não permitida:
    Informar um novo valor para a variável constante.
    Isso não é permitido.
*/

const x = 10

try {
    x = 2;

} catch(err) {
    /*
        Aqui permite uma resposta amigável para o usuário.
        Exemplo: "Não conseguimos processar a sua solicitação, tente novamente mais tarde."
    */
    console.log(`Erro: ${err}`);
}

console.log('Continuando o código...');

/* 
    Saída: 
    Erro: TypeError: Assignment to constant variable.
    Continuando o código...

    É uma saída mais amigável em comparação com o throw.
    Além disso, o programa não é encerrado.
        Constatação: a mensagem "Continuando o código..." é exibida.

*/