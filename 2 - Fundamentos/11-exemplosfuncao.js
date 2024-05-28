// Função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2);
imprimirSoma(4,6);
imprimirSoma(2, 10, 4, 5, 6, 7, 8, 9); 
// vai coletar os dados apenas de a e b
imprimirSoma();
console.log('')


// Função com retorno
function soma(a, b = 1) {
    // undefined e b = 0 mas tem como mudar isso na função
    // no caso 1 é o valor padrão de b
    return a + b
}

soma(2, 3) 
//nao imprime nada pois a função apenas retorna

console.log(soma(2, 3));
console.log(soma(2));
console.log(soma()); // not a number pq o 'a' nao tem valor atribuido
