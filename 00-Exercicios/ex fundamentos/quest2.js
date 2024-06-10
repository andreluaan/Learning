




/*
 Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

//Equilátero: Os três lados são iguais

//Isósceles: Dois lados iguais

//Escaleno: Todos os lados são diferentes.

function classification(side1, side2, side3) {
    if (side1 === side2 && side2 === side3) {
        return console.log('Equilátero')
    } else if(side1 !== side2 && side2 !== side3){
        return console.log('Escoleno')
    } else if(side1 === side2 ||side1 === side3
    || side2 === side3  ){
        return console.log('isóceles')
    }
}

classification(4,4,4)
classification(3,3,5)
classification(3,4,5)