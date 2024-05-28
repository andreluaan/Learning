const valores = [7.7 , 8.9 , 6.3 , 9.2];

console.log(valores[0], valores [3]); // indice 0 e indice 3
console.log(valores[4]);// nao existe no array pois só vai ate o indice 3

valores[4] = 10;
console.log(valores);
console.log(valores.length); //tamanho do array


console.log('')
valores[10] = 3;
console.log(valores);
console.log(valores.length);

console.log('');
valores.push( {id: 3}, false . null, 'teste');
// funcao .push serve para adicionar elementos no array
// adiciona ao final do array
console.log(valores);


/* BOAS PRATICAS : nao é o ideal misturar tipagem em apenas um array
  sempre fazer um array pra cada tipo seja eles
 string ,  numero, boolean e etc
*/

console.log(valores.pop());
// .pop serve para remover exatamente o ultimo elemento do array

delete valores [0]; 
//vai deletar o elemento indicado pelo indice no colchete

console.log(valores);

console.log(typeof valores);
// objeto