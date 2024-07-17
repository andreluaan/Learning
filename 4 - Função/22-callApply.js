/*      Aprendendo ingles junto com programação
    - price - preço
    - Tax - imposto
    - Coin - moeda
*/





// CALL e APPLY

function getPrice(tax = 0, coin = 'R$' ) {
    return `${coin} ${this.price * (1 - this.discount) * (1 + tax)}`
}

const product = {
    name: 'Notebook',
    price: 4500,
    discount: 0.15,
    getPrice
}

//globalThis.price = 20
//globalThis.discount = 0.1
console.log(getPrice())  // nao acesso o escopo product

console.log(product.getPrice())
console.log()




// CALL e APPLY
const carro = {
    price: 49990,
    discount: 0.20
}

console.log(getPrice.call(carro))
console.log(getPrice.apply(carro))
console.log()

// Call
console.log(getPrice.call(carro, 0.17, '$DOLAR CALL'))
//parametros do .call( CONTEXTO, 1 parametro da funcao, 2 par, 3...)


// APPLY
console.log(getPrice.apply(carro, [0.17, 'REAL APPLY']))
// .pply( CONTEXTO, [paramentro 1 da função, 2, 3...])
// parametros da função teem que ser dentro de um array