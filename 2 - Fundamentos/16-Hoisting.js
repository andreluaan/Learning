console.log('a = ', a);

/*
 variavel A mesmo sem ser declarada antes é dada como
 ja criada pois acontece o 'hoisting'
 a informação que existe a variavel é lançada pra cima
 e não dá o valor que está dentro dela, mas vê que ela foi criada
*/

var a = 2;
console.log('a =', a);

console.log('');

function teste() {
    console.log('a =', b);
    var b = 2;
    console.log('a =', b);

}

teste()
// console.log('a =', b);
//b is not defined
//pq ela foi definida dentro do escopo de função