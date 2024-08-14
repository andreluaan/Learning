// Crie uma função que irá receber dois valores, o dividendo e o divisor.
// A função deverá imprimir o resultado
//e o resto da divisão destes dois valores.



function resultAndRest( dividendo, divisor) {
    result = dividendo / divisor
    rest = dividendo % divisor

    return console.log(` o resultado é ${result} enquanto o resto da é ${rest}`)

}

resultAndRest(10,5)
resultAndRest(7, 2)