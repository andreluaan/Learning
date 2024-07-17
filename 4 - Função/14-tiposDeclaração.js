// function declaration
console.log(`a function declaration`, soma(3, 4))
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}

// named function expression 
const mult = function mult( x, y) {
    return x * y
}

/*
    o estilo de function declaration, declara as funções antes de o codigo
    rodar realmente, então ela pode ser executada linhas antes de ela ser
    declarada no codigo, pois ela ja vai está declarada assim que for iniciado
*/

/*
    a function expression só pode ser chamada abaixo das linhas em 
    que ela é declarada
*/

/*
    a named function expression tambem só pode ser chamada abaixo da
    linha em que ela é declarada    
*/ 