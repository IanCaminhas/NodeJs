/*
    Como instalei o lodash de forma global no computador, não seria necessário
    instalar pacotes pertinentes a esse pacote em node_modules.
    Entretanto, o módulo lodash necessita de alguns arquivos para funcionar no projeto.
    Para baixar esses arquivos no projeto, basta executar:
        npm link lodash

        A pasta node_modules vai ter alguns arquivos do lodash.
        A pasta node_modules não vai conter todos os arquivos.
            Apenas os arquivos necessários.
*/

const _ = require("lodash")

const arr = [1, 2, 2, 3, 3, 4, 4, 5];

/*O método .sortedUniq() vai deixar apenas os elementos únicos.
Ou seja, vai excluir o elementos repetidos. 
Saída: [ 1, 2, 3, 4, 5 ]
*/
console.log(_.sortedUniq(arr))