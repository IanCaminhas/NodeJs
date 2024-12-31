/*
O Node permite o envio de argumentos via linha de comando.
Passamos eles após a instrução de execução do arquivo.
Os argumentos ficam em um array chamado: process.argv
	Posso fazer um loop e resgatar os valores enviados.

Para usar o script abaixo, basta digitar no terminal:
    node index.js nome=Ian idade=30
    nome e idade são os argumentos passados via terminal.
*/

/*
Por padrão, o process.argv já vem com as 2 primeiras posições preenchidas:
    O executável do nodejs
    O arquivo que está sendo executado.
*/
console.log(process.argv);

/*Estou pegando todos os elementos a partir do segundo elemento do array. 
Estou ignorarando os dois primeiros elementos que já vem preenchidos: o executável e o arquivo que está sendo executado. 
Portanto, a função slice retorna um array*/
const args = process.argv.slice(2);

console.log(args);

const nome = args[0].split("=")[1];
const idade = args[1].split("=")[1];

/*
Itens exibidos:
    O executável do nodejs
    Mostra também o arquivo que está executando o process.argv
    Os argumentos informados: nome e idade.
*/
console.log(`O nome dele é ${nome} e ele tem ${idade} anos`);
