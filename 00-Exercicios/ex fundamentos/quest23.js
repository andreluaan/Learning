// ) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
// aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
// aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
// "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.




const NotaAluno = function(code, grade1,grade2,grade3) {
    gradesss = []

    gradesss.push(grade1)
    gradesss.push(grade2)
    gradesss.push(grade3)
    gradesss.sort

    let mediaFinal = ((grade1 * 4) + (grade2 * 3) + (grade3 * 3))/10
    let situacao;
    if (mediaFinal >= 5){
        situacao = 'Aprovado'
    }else {
        situacao = 'Reprovado'
    }
    console.log(`O aluno ${code} tem as notas : ${grade1}, ${grade2} e ${grade3}.
Sua média final é ${mediaFinal}.
você está ${situacao} `)
    
}



NotaAluno(123, 4, 5, 6)