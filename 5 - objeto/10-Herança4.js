function meuObjeto() {}
console.log(meuObjeto.prototype)

const obj1 = new meuObjeto
const obj2 = new meuObjeto
// 2 objetos diferents a partir de uma mesma função construtora

console.log(obj1.__proto__ === obj2.__proto__)
// Todos os objetos criados a partir de uma função construtora
// apontam para o mesmo protótipo

console.log(meuObjeto.prototype === obj1.__proto__)

// quando se cria um objeto a partir de uma função construtora
// usando new o protótipo desse objeto aponta pra função que você criou
// a função que foi criada.prototype nesse caso: meuObjeto.prototype

meuObjeto.prototype.nome = 'Anônimo'
meuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()
obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = meuObjeto.prototype
obj3.nome = 'obj3'
obj3.falar()

// resumindo a loucura...
console.log((new meuObjeto).__proto__ === meuObjeto.prototype)
console.log(meuObjeto.__proto__=== Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__  === null)


