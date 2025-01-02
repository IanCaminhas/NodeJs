/*
  1 - Para remover um arquivo com o fs utilizamos o método unlink.
  2 - Precisamos passar o arquivo como parâmetro.
  3 - Temos a possibilidade de checar se houve algum erro, a partir da callback retornada.
*/

const fs = require("fs");

//Esse método remove um arquivo. 
fs.unlink('arquivo.txt', function(err){
    if(err) {
        console.log(err);
        return;
    }

    console.log('Arquivo removido!');
});

/* Se o arquivo não existir, um erro é emitido no terminal.
[Error: ENOENT: no such file or directory, unlink 'C:\Users\Ian\Desktop\SI_UNOPAR\nodejs\aprendizado nodejs\3_core_modules\8_removendo_arquivos\arquivo.txt'] {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'unlink',
  path: 'C:\\Users\\Ian\\Desktop\\SI_UNOPAR\\nodejs\\aprendizado nodejs\\3_core_modules\\8_removendo_arquivos\\arquivo.txt'
}

*/