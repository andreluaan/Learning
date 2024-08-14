function receberPrimeiroEUltimoElemento(...elementos ){
    array = []
    elementos.forEach(elementos => {
        array.push(elementos)
    })
    console.log(array)
    array2 = []
    array2.push(array[0])
    array2.push(array[array.length - 1])
    console.log(array2)
}


receberPrimeiroEUltimoElemento(2,3,4,652,2,4)


