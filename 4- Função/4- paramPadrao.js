// estratégia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
}
// caso recebe o parametro a entao a = a se nao receber a = 1
// ou seja a = parametro a ou a = 1


console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1 (0, 0, 0))
// o 0 retorna falso entao o valor padrao 1 é atribuido as variaveis


// Estrategia 2, 3, 4 para gerar valor padrão

function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c

    return a + b + c
}


console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// Valor padrao do es2015

function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}


console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3 (0, 0, 0))
