/*
O módulo url serve para decompor uma URL que passamos para o método parse.
    O método parse é que faz os resgates de algumas partes da URL.
	Posso resgatar: host, path, search, query e etc.
*/

const url = require('url');
const address = 'https://www.meusite.com.br/catalog?produtos=mesa';
const parseUrl = new url.URL(address);

//Saída: www.meusite.com.br
console.log(parseUrl.host);
//Saída: /catalog... Em qual página o usuário está localizo ?
console.log(parseUrl.pathname);
//Saída: ?produtos=mesa... É o que o usuário está pesquisando na página.
console.log(parseUrl.search);
//Saída: mesa... Estou dando um get na chave produtos, ou seja, o item que o usuário está buscando.
console.log(parseUrl.searchParams.get('produtos'));

