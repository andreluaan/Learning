const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`indice ${x} = ${nums[x]}`)

 }
// quando o indice foi igual a 5 (posição 5 do array)
// ele sai do laço de repetição 
console.log()

for (y in nums) {
    if(y == 5) {
        continue
    }
    console.log(`indice ${y} = ${nums[y]}`)
}

// ele só interrompe a execução que está associada a ele
// e continuar no for
// nesse caso ele interrompe a repetição do indice 5 e 
// continua no indice 6

// ocorrendo um efeito de "pular" o indice 5

console.log()


// rotulo

externo : for (a in nums) { // laço rotulado ou nomeado de externo
    for(b in nums) { // laço interno
        if (a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}


// quando a == 2 e b == 3 ele vai parar o laço for externo 