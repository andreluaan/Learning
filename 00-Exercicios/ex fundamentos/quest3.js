// Crie uma função que recebe dois parâmetros, base e expoente, e retorne 
//a base elevada ao expoente


function baseElevated(base, exponent) {
    return base ** exponent
}

console.log(baseElevated(10, 2))
console.log(baseElevated(9,2))
console.log(baseElevated(2,2))
console.log(baseElevated(2,3))
console.log(baseElevated(10,3))
console.log()






function withMath(base, exponent) {
    return Math.pow(base, exponent)
}


console.log(withMath(10,2))
console.log(withMath(9,2))
console.log(withMath(2,2))
console.log(withMath(2,3))
console.log(withMath(10,3))