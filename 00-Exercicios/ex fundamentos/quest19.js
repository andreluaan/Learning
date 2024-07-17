/*
cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100     Cachorro Quente             R$ 3,00
200     Hambúrguer Simples          R$ 4,00
300     Cheeseburguer               R$ 5,50
400     Bauru                       $ 7,50
500     Refrigerante                R$ 3,50
600     Suco                        R$ 2,80

Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.

*/

const products = [
    { code: 100, singular: 'Cachorro quente', plural: 'Cachorros quentes', value: 3},
    { code: 200, singular: 'Hamburguer simples', plural: 'Hamburgueres Simples', value: 3},
    { code: 300, singular: 'Cheeseburguer', plural: 'Cheeseburguers', value: 3},
    { code: 400, singular: 'Bauru', plural: 'Baurus', value: 3},
    { code: 500, singular: 'Refrigereante', plural: 'Refrigerantes', value: 3},
    { code: 600, singular: 'Suco', plural: 'Sucos', value: 3},
]


const getTotal = function (amount, value) {
    return (amount*value).toFixed(2).replace('.', ',')
}

const account2 = function(code, amount) {
    const product = products.find(p => p.code === code);

    if(product) {
        const productName = amount === 1 ? product.singular : product.plural;
        console.log(`${amount} ${productName} por: R$${getTotal(amount, product.value)}`);
    } else {
        console.log('Não existe esse codigo no Sistema');
    }
}

// const account = function (code, amount) {
//     switch(code) {
//         case 100:
//             if (amount == 1)
//             console.log(`1 Cachorro Quente por : R$ 3,00 `)
//             else{
//             console.log(`${amount} Cachorros quentes por : R$${getTotal(amount, 3)}`)
//             }
//             break
//         case 200:
//             if (amount == 1)
//                 console.log(`1 Hamburguer Simples por : R$ 4,00 `)
//                 else{
//                 console.log(`${amount} Hamburgueres simples por : R$${getTotal(amount, 4)}`)
//                 }
//                 break
//         case 300:
//             if (amount == 1)
//                 console.log(`1 Cheeseburguer por : R$ 5,50 `)
//                 else{
//                 console.log(`${amount} Cheeseburguer por : R$${getTotal(amount, 5.5)}`)
//                 }
//                 break
//         case 400:
//             if (amount == 1)
//                 console.log(`1 Bauru por : R$ 7,50 `)
//                 else{
    
//                 console.log(`${amount} Bauru por : ${`R$${amount*7.5}0`.replace()}`)
//                 }
//                 break
//         case 500:
//             if (amount == 1)
//                 console.log(`1 Refrigerante por : R$ ${3.5}0 `)
//                 else{
//                 console.log(`${amount} Refrigerante por : R$${getTotal(amount, 3)}`)
//                 }
//                 break
//         case 600:
//             if (amount == 1)
//                 console.log(`1 Suco por : R$ 2,80 `)
//                 else{
//                 console.log(`${amount} Suco por : R$${amount*2.8}0`)
//                 }
//                 break
//         default: console.log('Não existe esse codigo no Sistema')  
//     }
// }
// account2(100,1)
// account2(200,1)
// account2(300,3)
// account2(400,3)
// account2(100,2)
// account2(500,2)
// account2(600,3)
// account2(300,1)
// account2(300,2)



account2(400,1)
account2(300,1)
account2(500,2)