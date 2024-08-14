// Armazenando uma função em uma variável
const imprimirSoma = function(a, b) {
    console.log(a + b);

}
imprimirSoma(2, 3);

//-----------------------------------------------------------

//Armazenando uma função arrow em uma variável
const soma = (a, b) =>{

    // => arrow que substitui o nome function mas serve da mesma coisa
    return a + b;
}

console.log(soma(2, 3));

//------------------------------------------------------------

//return implicito
const subtracao = (a, b) => a - b
// quando nao tem a chave -- {} -- essa função só pode operar nessa linha 

console.log(subtracao(2, 3));

//------------------------------------------------------------

const imprimir2 = a => console.log(a);
imprimir2('legal cara!!!!');