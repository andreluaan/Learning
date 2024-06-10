const [a] = [10] //criando array de uma posição
console.log(a);

const [n1 , , n3, , n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);

/*
    foi feito um array de elementos constantes
    e um de valores a ser atribuidos
    foi atribuido um valor a cada elemento do primeiro array
    na ordem das posições
    n1 que esta na primeira posição recebe 10 e assim por diante

*/

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota);

// a virgula separa os elementos no array 
// a primeira virgula faz com oq venha antes seja ignorado
// ou seja o primeiro elemento do segundo array é [, 8, 8]
// [, nota] ignora o primeiro elemento de dentro e da nome a o segundo
// ao elemento nota é atribuido o 6, o segundo elemento do segundo array de dentro
 