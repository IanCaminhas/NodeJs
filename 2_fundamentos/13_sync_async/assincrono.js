//Cenário que exemplifica um código assíncrono

const fs = require('fs');

console.log('Início');

fs.writeFile('arquivo.txt', 'oi', function(err){
    setTimeout(function() {
        console.log('Arquivo criado!');
    }, 2000);
});

console.log('Fim');

/*
Por ser um código assíncrono e a mensagem console.log('Arquivo criado!') demorar 2000 ms para ser exibida,
a mensagem console.log('Fim'); vai ser exibida primeiramente.
Ou seja, tudo roda em paralelo.

Saída:
Início
Fim
Arquivo criado!
*/