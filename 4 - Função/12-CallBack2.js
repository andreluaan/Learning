const notas = [7.7 , 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// com foreach
notas.forEach(function(elemento){
    if (elemento < 7){
        console.log(`A nota ${elemento} é menor que 7`)
    }
})


// Sem CALLBACK
console.log()
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// Com Callback
console.log()
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas2)


//nao altera o array original, apenas produz um subarray novo

// com callBack e arrowf
console.log()

const notasBaixas3 = notas.filter( nota => nota < 7)
console.log(notasBaixas3)