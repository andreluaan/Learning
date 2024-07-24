// Object.preventExtensions

const produto = Object.preventExtensions({
    nome: 'qualquer', preco: (1.99).toFixed(2), tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto))


//adicionando 
produto.peso = '3 kilos'
produto.descricao = 'Borracha escolar branca'
produto.comprimento = '12 metros'
//modificando
produto.nome = 'Borracha'
produto.preco = 2.00

//deletando
delete produto.tag


console.log(produto)


// a função Object.preventExtensions : Não permite adicionar novas chaves e valores
// ao objeto,    masss permite que ocorra modificações nas chaves que foram Ja adionadas
// e permite também que seja apagado as chaves e valores adionados também
console.log()

// Object.seal 
const pessoa = { nome: 'Juliana' , idade : 35, altura: 1.57 }
Object.seal(pessoa)

console.log('Selado:', Object.isSealed(pessoa))

//adicionando
pessoa.sobrenome = 'Silva'
pessoa.cpf = 119282139123
pessoa.rg = 12312
pessoa.corCabelo = 'preto'

//deletando
delete pessoa.nome
delete pessoa.altura

//modificando
pessoa.nome = 'Maurilio'
pessoa.altura = 1.80

console.log(pessoa)

// A função Object.seal : Não permite que seja adicionado novas chaves e valores
// Não permite também que seja deletado as chaves do objeto
// mas ela permite ainda que consiga ser modificado os valores das chaves que 
// foram adicionadas antes do selamento
console.log()


// Object.freeze(objeto) = selado + valores constantes

const ferrari = {modelo: 'F40', velMax: 345, cor: 'vemelha'}
Object.freeze(ferrari) 

//adicionando 
ferrari.tamanhoDaRoda = 'aro 34'
ferrari.Motor = 'v8'
ferrari.escapamento = 'tonhão'

//deletando 
delete ferrari.modelo
delete ferrari.cor

//modificando

ferrari.modelo = 'F70'
ferrari.velMax = 400

console.log(ferrari)

// A função Object.freeze() Não permite 
// adionar chaves valor
// deletar chaves valor
// modificar chaves valor
// após o freeze o objeto fica completamente imútavel 


