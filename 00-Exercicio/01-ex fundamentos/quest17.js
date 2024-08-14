/* 
) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:

Plano Aumento
A     10%
B     15%
C     20%

Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/


const planoDeTrabalho = function (PlanWork, wageCurrent) {
    switch(PlanWork.toUpperCase()){
        case 'A' :
            wageNew = wageCurrent +  (wageCurrent * 0.10)
            console.log(`O seu novo salário é ${wageNew}`)
            break
        case 'B' :
            wageNew = wageCurrent + (wageCurrent * 0.15)
            console.log(`O seu novo salário é ${wageNew}`)
            break
        case 'C' :
            wageNew = wageCurrent + (wageCurrent * 0.20)
            console.log(`O seu novo salário é ${wageNew}`)
            break
        default : console.log("PLANO INVÁLIDO")
    }

}

planoDeTrabalho('a', 1000)
planoDeTrabalho('b', 1000)
planoDeTrabalho('c',1000)




