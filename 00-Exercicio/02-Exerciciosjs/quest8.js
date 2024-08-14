function multiplicar(num1, num2) {
    if (num1 >= 0 && num2 >= 0){
        let contador = num2
        for(let i = 0; i < (num1-1); i++){
            contador = contador + num2
        }
        console.log(`A multiplicação é de ${num1} x ${num2} é igual a ${contador}`)
    }
}

multiplicar(2,5)
console.log()
multiplicar(4,5)

