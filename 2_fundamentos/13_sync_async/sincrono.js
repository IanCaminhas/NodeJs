//Cenário que exemplifica um código síncrono

const fs = require('fs');

console.log('Início');

fs.writeFileSync('arquivo.txt', 'oi');

console.log('Fim');

/*
Por ser um código síncrono, a mensagem console.log('Fim') só vai ser exibida quando
a criação e a escrita do arquivo forem finalizados. 
Ou seja, é necessário o término da função writeFileSync.
    Aí depois a mensagem 'Fim' é exibida.

Saída:
Início
Fim
*/