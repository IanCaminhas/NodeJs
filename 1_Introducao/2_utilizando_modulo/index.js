/*
Atualmente, a importação ocorre pela instrução "import".
A instrução require é a forma antiga para importação.

Essa importação é constante em todo o projeto. 
Assim, é necessário importar juntamnete com a constante.
Geralmente, o nome da variável é igual ao nome do módulo.
    Isso é uma convenção.
    Posso colocar outro nome para a variável.

Módulo do Node importado: o File System.
    Este módulo serve para trabalhar com diretórios, arquivos e etc.
    E ele é um Core Module, ou seja, não é necessário instalar.

*/
const fs = require('fs') //file system

/*
    readFile é o método que Lê o arquivo.
    Arg1: É o caminho do arquivo. 
    Arg2: Codificação. 
        No caso é a utf8.
        Ou seja, para aceitar os acentos.
    Arg3: Função para exibir um erro ou o conteúdo do arquivo.
        Foi criada uma arrow function.
*/
fs.readFile('arquivo.txt', 'utf8', (err, data) => {
    if(err) {
        console.log(err);
    }
    console.log(data);
});