/*) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
 */


const Calculadora = function (num1, operacao, num2) {
    if(isNaN(num1, num2)){
        console.log('Os valores digitados não estão corretos')
    }else{


    switch(operacao){
        case '+':
            console.log(num1 + num2)
            break
        case '-' :
            console.log(num1 - num2)
            break
        case '*': case 'x' :
            console.log(num1 * num2)
            break
        case '/': 
            console.log(num1 / num2)
            break
        default : console.log('Não identitificado')
        
            
    }}

}

Calculadora(2, '+', 3)
Calculadora(4, '-', 8)
Calculadora(6, '/', 3)
Calculadora(3, '/', 6)
Calculadora(6, '*', 3)
Calculadora('dois',2, '-')


