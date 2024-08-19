const Fnumber = e => typeof e == 'number'

function filtrarNumeros(... elementos) {
    const array = []
    elementos.forEach(e => array.push(e))
    let copia = []
    copia = array.filter(Fnumber)
    return console.log(copia)
}


filtrarNumeros("a", "b", 2, 3, 4, 5)