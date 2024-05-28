const a = 7; // ' = '  sinal de igual é atribuição
let b = 3;

b += a;   // b = b + a
//10
console.log(b);

b -= 4;  // b = b - 4
console.log(b);
//10 - 4 = 6
// agora esse é o valor de B 

b *= 2;  //  b = b * 2
// 6 * 2 = 12
console.log(b);

b /= 2; // b = b / 2
// 12 / 2 = 6
console.log(b);


b %= 2;  // b = b % 2      % = modulo  ou seja o resto da divisao
// resto de 6 / 2 = 0 pois o resultado é inteiro
// 6/2 = 3


// pode ser usado tbm pra descobrir se o numero é par ou impar dividindo 
// o  mesmo por dois 
// se é impar por exemplo 17 / 2 vai sobrar 1 pois 
// o resto de 17/2 nao é 0  17 / 2 = 8,5 mas no calculo o resultado é
// 8 com resto 1
console.log(b);