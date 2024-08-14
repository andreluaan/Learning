/*) Faça um algoritmo que calcule o fatorial de um número.*/


function fatorial(numero) {
    produto = numero
    total = 0
    pivor2 = numero -1
    while(pivor2 !== 0) {
        produto = produto * pivor2
        pivor2 = pivor2 - 1
        total = produto
        
    }

return console.log(`fatorial de ${numero} é ${total}`)
}

fatorial(10)
fatorial(9)
fatorial(8)