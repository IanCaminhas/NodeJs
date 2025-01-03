/*
Objetivo:
	Saber os detalhes de arquivos com o core modules fs.

1 - Posso saber mais sobre os arquivos que tenho acessos.
2 - Utilizo o método stat de fs.
3 - Com ele tenho informações de: tamanho, data de criação, se é arquivo ou diretório e etc.
*/

const fs = require("fs");

fs.stat("arquivo.txt", (err, stats) => {
    if(err) {
        console.log(err);
        return;
    }
    //É um arquivo ? Saída: true
    console.log(stats.isFile());
    // É um diretório ? Saída: false
    console.log(stats.isDirectory());
    //É um link simbólico ? Saída: false
    console.log(stats.isSymbolicLink());
    //Data e hora de criação do arquivo. Saída: 2025-01-03T12:01:48.561Z
    console.log(stats.ctime);
    //Tamanho do arquivo em bytes. Saída: 3
    console.log(stats.size);
});

fs.stat("pasta", (err, stats) => {
    if(err) {
        console.log(err);
        return;
    }
    //É um arquivo ? Saída: false
    console.log(stats.isFile());
    // É um diretório ? Saída: true
    console.log(stats.isDirectory());
    //É um link simbólico ? Saída: false
    console.log(stats.isSymbolicLink());
    //Data e hora de criação da pasta. Saída: 2025-01-03T12:48:57.878Z
    console.log(stats.ctime);
    //Tamanho do arquivo em bytes. Saída: 0
    console.log(stats.size);
});