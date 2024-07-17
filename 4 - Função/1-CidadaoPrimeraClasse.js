

// Funcão em JS é First-Class Object  (Citizens)
// Higher-Order function, função de alta ordem

// 1 - criar função de forma literal

function funcao1(/*parametros */) {/*
    corpo da funçao 
    aqui vc pode efetuar o funcionamento da função
    e fazer com que ela retorne um valor 
    ou alguma ação para que ela seja atribuída

    se nao for pedido pra ela retornar nada, ela
    retornará "undefined"
*/ }




// 2 - Armazenar função em uma variavel

const funcao2 = function () {  }

funcao1()
// assim podendo chamar a função com o nome da variavel


// 3 - Armazenar em um array

const array = [function (a, b) {return a + b}, funcao1, funcao2]
console.log(array [0](2, 3));
// pode ser declarado dentro do array
// ou pode ser armazenado uma função ja declarada


// 4 - Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { 
    return 'opa'
}
console.log(obj.falar())

//5 - passar como parametro
function run(funcao) {
    funcao()
}

run(function() {console.log(`executando... `)})


// 6 - Uma funcao pode retornar/conter funcao

function soma(a, b) {
    return function (c) {
        console.log(a+b+c);
    }
}
soma(2,3)(4)
