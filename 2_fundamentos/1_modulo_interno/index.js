/*
    A instrução require é uma forma para realizar a importação.
    Posso suprimir o o .js... 
        Em outras palavras, posso fazer: require('./meu_modulo.js');
*/
const meuModulo = require('./meu_modulo');

/*Forma número 1 para chamar a função do módulo.
Acaba sendo uma forma mais simplificada.
*/
const soma = meuModulo.soma;
soma(2,3);
soma(5,10);

/*Forma número 2 para invocar a função do módulo.
Acaba sendo a forma menos simplificada, pois preciso usar a instrução meuModulo a cada invocação.
*/
meuModulo.soma(1,1);

