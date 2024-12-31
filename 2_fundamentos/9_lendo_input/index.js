//Configurações para receber e imprimir dados.
//readline é um módulo interno do nodejs. Assim, não preciso dar um npm install.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

/*Imprimindo a questão para o usuário. 
Através da função anônima, eu exibo a resposta do usuário. */
readline.question("Qual a sua linguagem preferida ? ", (language)=>{

    if(language==="Python") {
        console.log("Péssima escolha kkkkkkk!!!")
    } else {
        console.log(`A minha linguagem preferida é: ${language}`);
    }

    readline.close();
});