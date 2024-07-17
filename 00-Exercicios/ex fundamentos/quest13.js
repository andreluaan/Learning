/*) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
 */


const diaDaSemana = function (dia) {
    switch(dia){
        case 1: case 7:
            console.log('Finail de semanaaa!!!')
            break
        case 2: case 3: case 4: case 5:
            console.log('Dia Útill !!!')
            break
        default: 
            console.log('Dia invalido')
    }

}

diaDaSemana(2)
diaDaSemana(1)
diaDaSemana(4)
diaDaSemana(9)