function rand( [min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
     // troca o min pelo max se for maior
    const valor = Math.random() * (max-min) + min;
    return Math.floor(valor);


}

console.log(rand([50, 40])) //troca o min pelo max ja que o min é maior
console.log(rand([555]))// só o valor de minimo
console.log(rand([, 10])) // so o valor de maximo
console.log(rand([])) // elementos padroes 0 e 1000
// console.log(rand()) da erro pois desestrutar algo nulo
