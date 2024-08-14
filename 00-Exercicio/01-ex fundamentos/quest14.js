/*Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.

 */


const condicional = function(fruit) {
    switch(fruit.toLowerCase()) {
        case 'maçã' :
            console.log(`We dont sell this fruit here :(`)
            break
        case 'kiwi': 
            console.log(`We are out of Kiwi`)
            break
        case 'melancia' : 
            console.log('here it is, 3 dollars per kilo')
            break
        default :
            console.log('Não consegui identificar')

    }

}

condicional('Maçã')
condicional('mElAncia')