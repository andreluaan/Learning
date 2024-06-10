let valor; // noa inicializada
console.log(valor);
//undefined 
/*
    uma variavel declarada porem sem valor atribuido a ela 
*/

/* console.log(valor2); 
gera um erro pois ela nao foi nem declarada
 como variavel
*/


valor = null;  

// null
/*
    indica a ausência de valor, ou seja, nao aponta
    pra nenhum local de memória 

    ela ta vazia
*/
console.log(valor);

//console.log(valor.toString());
// vc nao pode ler a propriedade toString de nulo, o nulo nao tem referencia

const produto = {}; //objeto vazio
console.log(produto.preco); // preco undefined ou indefinido
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco);  //tranformando emm bolean
console.log(produto);

produto.preco = null // sem preço
console.log(!!produto.preco);
console.log(produto);
