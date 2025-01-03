const fs = require('fs');

/*
Se não existir a pasta no diretório local, vou informar para ao usuário que não existe e criar a pasta...
*/
if(!fs.existsSync('./minhapasta')) {
    //Saída: Não existe!
    console.log('Não existe!');
    //Criando a pasta
    fs.mkdirSync('minhapasta');
} 
//Se existe a pasta, vou informar ao usuário que existe.
else if(fs.existsSync('./minhapasta')) {
    //Saída: Agora Existe!
    console.log('Existe!');
}
