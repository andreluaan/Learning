 const produtos = [
    {nome: 'Notebook' , preco: 2499 , fragil: true },
    {nome: 'iPad Pro' , preco: 4199 , fragil: true},
    {nome: 'Copo de Vidro' , preco: 12.49 , fragil: true},
    {nome: 'Copo de Plástico' , preco: 18.99 , fragil: false},
]


 
console.log(produtos.filter(function(p){
    return false

}))
// o retorno tem que ser verdadeiro ou falso
// elementos "false" não apareceram no console
// pois não passaram no processo


console.log(produtos.filter(function(p){
    return p.fragil

}))

console.log(produtos.filter(function(p){
    return p.preco > 500

}))

const fragil = e => e.fragil == true
const caro = e => e.preco > 500

console.log(  produtos.filter(fragil).filter(caro)        )



// no .filter ele filtra os elementos do array

// o .filter não necessáriamente vai obter a mesma quantidade 
//  de elementos que o array original, masss nunca vai obter
// mais elementos doq o original por está justamente filtrando se é
// ou não compativel com o que foi passado no callback