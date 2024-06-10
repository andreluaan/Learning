// IIFE -> Immediately invoked Function Expression
// Expressão de Função imediatamente invocada

(function(){
    console.log('Será executado na hora!')
    console.log('foge do escopo mais abrangente!')
})()

/* ele chama assim que é expressada 



    qualquer variavel criada dentro da IIFE - nao vai tocar
    no escopo global
*/
console.log()



// os dois funcionam igual mas a de cima nao toca no escopo global
console.log('Será executado na hora!')
console.log('foge do escopo mais abrangente!')

