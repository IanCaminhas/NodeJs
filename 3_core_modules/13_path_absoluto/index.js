/*
O Objetivo é aprender dois recursos interessantes:
	1 - Path absoluto. 
	2 - Formar path.

1 - Com a função resolve é possível saber qual o path completo até o arquivo alvo.
	Ou seja: qual o caminho para chegar no arquivo de destino ?
2 - E com a função join é possível formar um path dinâmico, com variáveis e valores fixos.
	Ou seja: criar um caminho dinamicamente.
*/

const path = require("path");

/*
Como saber o path absoluto de um arquivo ?
Saída: C:\Users\Ian\Desktop\SI_UNOPAR\nodejs\aprendizado nodejs\3_core_modules\13_path_absoluto\teste.txt.
    Portanto, retorna o caminho exato. 
    Desde a unidade do meu HD(Uni. C:) até o arquivo que dsejo saber.
*/
console.log(path.resolve('teste.txt'));

//Uma pasta
const midFolder = 'relatorios';
//O arquivo
const fileName = 'ian.txt';

/*
Estou criando um caminho. Para isso, estou usando o método join(). 
Para criar o caminho, o join vai juntando as partes até constituir o path final.
Uma pasta: midFolder
Um arquivo: fileName.

Quando executo o código, o arquivo não é criado.
*/
const finalPath = path.join("/", 'arquivos', midFolder, fileName);

/*Saída: C:\Users\Ian\Desktop\SI_UNOPAR\nodejs\aprendizado nodejs\3_core_modules\13_path_absoluto\teste.txt\arquivos\relatorios\ian.txt
Perceba-se que foram criados a pasta relatorios e o arquivo isAnyArrayBuffer.txt*/
console.log(finalPath);

