// pessoa => 123 --> {...}



const pessoa = { nome: 'João'}
console.log(pessoa)
pessoa.nome = 'Pedro'

// o que é feito aqui é uma mudança na variavel 'nome'
// dentro do objeto pessoa

// mas o objeto pessoa continua constante
console.log(pessoa)





//pessoa = {nome: 'Ana'}
console.log(pessoa)
// aqui voce quer atribuir outro objeto para a constante pessoa
// trocando os endereços apontados e ai ocorre o erro
// pessoa => 456 --> {...}


Object.freeze(pessoa)
// congela as informações a partir da linha 25
pessoa.nome = 'Maria'
pessoa.endereço = 'Rua ABC'
delete pessoa.nome
console.log(pessoa)


// o objeto pessoa e suas variaveis passam a ser 100%
// constantes apos o freeze


const pessoaConstante = Object.freeze({nome: 'luan'})
pessoaConstante.nome ='Maria'
console.log('\n', pessoaConstante)
// criado sem modificação 