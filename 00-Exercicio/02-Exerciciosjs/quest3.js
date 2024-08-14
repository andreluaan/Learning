function calcularSalario(quantHors, PorHora) {
    console.log(`O salario é igual a R$${(quantHors * PorHora).toFixed(2).replace(".",",")}`)
}

calcularSalario(150, 40.5)