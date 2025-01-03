/*
1 - Com o path, consigo extrair diversas informações sobre caminhos e arquivos.
        Path também é um Core Module.
2 - Algumas infos possíveis são: 
        Nome do diretório. 
        Nome do arquivo. 
        Extensão do arquivo. 
        Etc.
*/

const path = require("path");

const customPath = "/relatorios/ian/relatorio.pdf";

//Qual o caminho para chegar no arquivo ? Saída: /relatorios/ian
console.log(path.dirname(customPath));

//Qual o nome do arquivo ? Saída: relatorio.pdf
console.log(path.basename(customPath));

//Qual a extensão do arquivo ? Saída: .pdf
console.log(path.extname(customPath));
