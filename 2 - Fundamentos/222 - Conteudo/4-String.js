const escola = 'cod3r';
//começa da posição 0

console.log(escola.charAt(4));
 // retorna o digito da posição que for chamada
 // no caso a '4'

console.log(escola.charAt(5));//  nao retorna nada pois nao existe nada na posicao 5
console.log(escola.charCodeAt(3)); // retoorna o codigo do digito
console.log(escola.indexOf('3'));



console.log(escola.substring(1)); // do indice 1 ate o final
console.log(escola.substring(0, 3)); // va do indice  0  ate o 3


console.log('Escola '. concat(escola).concat('!')); // .concat serve para concatenar uma cadeia de caracteres


console.log(escola.replace(3, 'e')); // realoca o 'e' no lugar do 3 


console.log('Ana,Maria,Pedro'.split(','));  // .split cria um array 

