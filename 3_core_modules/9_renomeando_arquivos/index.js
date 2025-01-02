/*
  1 - Para renomear um arquivo com o fs utilizamos o método rename.
  2 - Precisamos passar o arquivo como parâmetro.
  3 - E também o novo nome.
  4 - Neste método também podemos verificar algum eventual erro, pela callback.
  5 - Que pode ser ativado quando o arquivo alvo não existe.
*/

const fs = require("fs");

const arqAntigo = "arquivo.txt";
const arqNovo = "novoarquivo.txt";

fs.rename(arqAntigo, arqNovo, function(err) {

    if(err) {
        console.log(err);
        return;
    }

    console.log(`O arquivo ${arqAntigo} foi renomeado para ${arqNovo}`);
});

/* Se o arquivo não existir, um erro é emitido no terminal.
[Error: ENOENT: no such file or directory, rename 'C:\Users\Ian\Desktop\SI_UNOPAR\nodejs\aprendizado nodejs\3_core_modules\9_renomeando_arquivos\arquivo.txt' -> 'C:\Users\Ian\Desktop\SI_UNOPAR\nodejs\aprendizado nodejs\3_core_modules\9_renomeando_arquivos\novoarquivo.txt'] {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'rename',
  path: 'C:\\Users\\Ian\\Desktop\\SI_UNOPAR\\nodejs\\aprendizado nodejs\\3_core_modules\\9_renomeando_arquivos\\arquivo.txt',
  dest: 'C:\\Users\\Ian\\Desktop\\SI_UNOPAR\\nodejs\\aprendizado nodejs\\3_core_modules\\9_renomeando_arquivos\\novoarquivo.txt'
}
*/