function a(){
    console.log("Executando a()");
}

function b(){
    console.log("Executando b()");
}

function c(){
    console.log("Executando c()");
    a()
    b()
}

c();

/* 
1 - O Event Loop é um recurso da arquitetura do Node.
2 - O Node.js executa uma linha por vez, e de cima para baixo do código escrito.
Não preciso preocupar com Event loop. Ele já ocorre por debaixo dos panos. Não preciso lidar com Event Loop.
*/

/*Saída do código:
Executando c()
Executando a()
Executando b()
*/