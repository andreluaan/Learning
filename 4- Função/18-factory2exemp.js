// exemplo pedido

function createProduct(name, price) {
    return {
        name,
        price,
        priceWithDiscount: price - (price * 0.20),
        percentagediscount: '20%'
    }

}

const garrafa = new createProduct('garrafa', 100)

console.log(`   Eu tenho uma produto chamado ${garrafa.name} e o seu preço é ${garrafa.price},
    mas como eu sou bonzin, eu vou lhe darum desconto de ${garrafa.percentagediscount}
    ai vai sair por  ${garrafa.priceWithDiscount} só`)