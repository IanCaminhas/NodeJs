/*
    Lodash é uma biblioteca poderosa e versátil para manipulação de dados em JavaScript. 
    Ela é amplamente utilizada para simplificar operações comuns com arrays, objetos, strings, números, etc., em projetos de Node.js.

    npm install lodash

    O uso de _ permite que o código seja mais limpo e legível. 
        Além disso, essa convenção facilita o reconhecimento de que as funções usadas vêm do Lodash.
*/
const _ = require('lodash');

const a = [1, 2, 3, 4, 5];
const b = [2, 4, 6, 7, 8];

/*
Estou listando a diferença entre os dois arrays. 
    Faço isso por meio do pacote lodash.
*/
const diff = _.difference(a,b);

//Saída: [ 1, 3, 5 ] -> Esses números não fazem parte do array b.
console.log(diff);

