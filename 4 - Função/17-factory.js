// criando objetos metodo normal
const prod1 = {
    nome:  'produts',
    preco: 45
}

const prod2 = {
    nome: 'produt2',
    preco: 13
}
console.log(prod1)
console.log(prod2)





// criando objetos metodo factory
console.log()
function createPerson() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(createPerson())



console.log()
function createPerson2(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    }
}

console.log(createPerson2('joao', 'Frago', 15))
console.log(createPerson2('maria', 'madalena', 23))