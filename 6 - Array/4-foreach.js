const aprovados = ['Agatha', 'Aldo' , 'Daniel', 'Raquel']


aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})


console.log()
aprovados.forEach(nome => console.log(nome))


console.log()
const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)



/* dentro do forEach é instalado uma FUNÇÃO CALL BACK

     essa função pode ser ja criada fora do forEach como no proprio parametro do metodo

    A função call back do forEach tem um padrão de parametros valor, posição do array e array

    ListaArray.forEach(  Função( Valor ou elemento do array, posição, o proprio array){
                                'conteudo da função'
              })
*/




// Pode ser passada tambem com uma arrow function

/*    ArrayList.forEach(parametro1, parametro2, parametro3 => {
            conteudo da função
    })
*/

