const fabricantes = [ "Me+rcedes", "Audi", "BMW" ]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome} `)
    // indice + 1 pois array começa da posição 0
}

fabricantes.forEach(imprimir)
// forEach itera sobre """cada elemento""" da coleção
// de acordo com a função parametro 
console.log()
fabricantes.forEach(function (fabricante) {
    console.log(fabricante) 
} 
)

// pode ser tb uma arrow function
console.log()
fabricantes.forEach(fabricante2 => console.log(fabricante2))

/*  loop

    cada vez que ele encontra um elemento na coleção ou array
    ele dispara a função que está dentro do parametro
    e repete isso até acabar a coleção de elementos
*/