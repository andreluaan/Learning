// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variaveis externas á função

// Contexto lexico em ação

const x = 'global'

function outside() {
    const x = 'local'

    function inside() {
        return x
    }
    return inside
}

const myFunction = outside()
console.log(myFunction())

/* 
    basicamente a função criada dentro de outra função nao capta 
    uma constante global se houver uma constante igual declarada 
    dentro da função onde ela mesma está sendo declarada
*/