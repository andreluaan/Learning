const nums = [1, 2, 3, 4, 5]


let resultado = nums.map(function(elemento){
    return elemento * 4
})
console.log(resultado)
// o map cria um novo array transformado
// baseado na instrução dada no map 
// o map NãO altera o array original


const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)

// o resultado foi modificado a cada vez que que foi chamado o .map
// e o conteudo final foi o calculo de todos os .map feitos