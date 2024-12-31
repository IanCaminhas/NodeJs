/*Por convenção:
    A variável ou a constante deve ter o mesmo nome do módulo.
*/
const path = require('path');

//Qual a extensão do arquivo ?
const extension = path.extname("arquivo.pdf");

//Saída com a extensão do arquivo. Saída: .pdf
console.log(extension);

