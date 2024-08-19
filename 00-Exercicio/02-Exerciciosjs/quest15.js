const pares = e => e % 2 == 0
const indicePar = (_,indice) => indice % 2 == 0


function receberSomenteOsParesDeIndicesPares(... elementos) {
    const array = []
    elementos.forEach(elementos => array.push(elementos))
    console.log(array.filter(indicePar).filter(pares))

}

receberSomenteOsParesDeIndicesPares(0,1,2,3,4,5,6,7,8,9,10)
receberSomenteOsParesDeIndicesPares(10,70,22,43)

