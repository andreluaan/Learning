/**
  Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’

 */



const reader = function (number) {
    switch(number) {
        case 0 :
            console.log('zero')
            break
        case 1:
            console.log('One')
            break
        case 2:
            console.log('Two')
            break
        case 3:
            console.log('Three')
            break
         case 4:
            console.log('Four')
            break
        case 5:
            console.log('Five')
            break 
        case 6:
            console.log('Six')
            break   
        case 7:
            console.log('Seven')
            break
        case 8:
            console.log('Eight')
            break    
        case 9:
            console.log('Nine')
            break 
        case 10:
            console.log('Ten')
            break
        default: console.log('Numero fora do intervalo')
        
        }


}


reader(1)
reader(2)
reader(3)
reader(4)
reader(5)
reader(6)
reader(7)
reader(8)
reader(9)
reader(10)
reader(11)
