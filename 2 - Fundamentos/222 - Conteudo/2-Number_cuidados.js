// quantos mais o divisor se aproxima de 0 maior ele fica
// mas no js ele retorna Infinity

console.log(7 / 0.00001);
console.log(7 / 0.000000001);
console.log(7 / 0.1);
console.log(7 / 0);

console.log('\n');
// se for geralmente inteiro ele identifica a string como number 
// e faz a divisão
console.log('10' / 2);
console.log('10,2' / 2); // o ',' faz com que ele nao identifique

console.log('show!' * 2); 
// retorna um "Not a Number"



// console.log(10.toFixed(2)); // gera um erro por ser um numero
console.log((10.1).toFixed(2));
//da pra fazer entre parenteses

// ou faça uma variavel
const numero101 = 101;
console.log(numero101.toFixed(2));




