const x = "10";

//Checando se x é um número
if(!Number.isInteger(x)) {
    throw new Error('O valor de x não é um número inteiro!');
}

console.log('Continuando o código...');

/*
Como "10" está como string, o throw é lançado.
O programa é encerrado.
    Constatação: a mensagem "Continuando o código..." não é exibida. 
A saída no console não é nada elegante também.

Saída:
  throw new Error('O valor de x não é um número inteiro!');
    ^
    
Error: O valor de x não é um número inteiro!
    at Object.<anonymous> (C:\Users\Ian\Desktop\SI_UNOPAR\nodejs\aprendizado nodejs\2_fundamentos\14_erros\throw.js:5:11)
    at Module._compile (node:internal/modules/cjs/loader:1568:14)
    at Object..js (node:internal/modules/cjs/loader:1711:10)
    at Module.load (node:internal/modules/cjs/loader:1328:32)
    at Function._load (node:internal/modules/cjs/loader:1138:12)
    at TracingChannel.traceSync (node:diagnostics_channel:315:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:218:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)
    at node:internal/main/run_main_module:36:49

Node.js v23.0.0

*/