/*) 
Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true 
ou false. 
*/

function verificacaoint(numero) {
    let inteiro = Number.isInteger(numero)
        if (inteiro === true){
    let verificacao = numero % 3
        if (verificacao === 0){
            console.log('true')
        } else{
            console.log('false')
        }
    }else{
        console.log(`O numero "${numero}" nâo é inteiro`)
    }
}

verificacaoint(3)
verificacaoint(6)
verificacaoint(7)
verificacaoint(1.2)
verificacaoint(12)
verificacaoint(15)