const pessoa = { 
    nome: 'rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // lista de chaves
console.log(Object.values(pessoa)) // lista de valores das chaves 
console.log(pessoa)
console.log(Object.entries(pessoa)) // arrays com subarryas com chave e valor
console.log()

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`) //  e[0] : chave,   e[1] : valor
})


Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable : true, // se mudar para false ela não aparece no Object.Keys
    writable: false,
    value: '01/01/2019'
}) // define a chave e valor e ainda decide se ele vai ou não
    // aparecer em uma chamada keys ou values por exemplo

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimeto) // é chamada normalmente e criada no array
console.log(Object.keys(pessoa))
console.log()




// objet.assign (ECMASscript 2015)

const dest = { a: 1}
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)
console.log(dest) 

Object.freeze(obj)
obj.c = 1234
console.log(obj)