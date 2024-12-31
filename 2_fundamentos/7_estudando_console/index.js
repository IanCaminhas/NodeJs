const x = 10;
const y = 'Ian';
const z = [1,2];

/*Concatenando mais de um valor. 
Para fazer isso, basta separar por vírgula.
Saída: 10 Algum texto [ 1, 2 ]
    Percebe-se que cada valor ficou um do lado do outro.
*/
console.log(x, y, z);

/*Estou fazendo a contagem de impressões. 
É bem interessante quando uso em conjunto com o loop. 
Saída:
O valor de x é: 10, contagem: 1
O valor de x é: 10, contagem: 2
O valor de x é: 10, contagem: 3
O valor de x é: 10, contagem: 4
O resultado foi exibido 4 vezes.
*/
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);

/* 
Variável entre string. Bem comum na linguagem C.
Se eu colocar uma variável numérica, ela será convertida num texto. 
*/
console.log("O nome é %s, ele é programador", y);

/*
Limpando o console. 
    Estou fazendo a limpeza do console depois de 2 segundos.
Outra utilidade:
    Posso fazer a limpeza do console após a realização de uma lógica.
*/
setTimeout(()=>{
    console.clear()
}, 2000);