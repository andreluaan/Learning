function somarNumeros(... elementos) {
    const array = []
    elementos.forEach( e => array.push(e))

    return array.reduce( (e,a) => e + a)
    
}

console.log(somarNumeros(10, 10, 10, 10))

