const obj = {a: 1, b: 2, c: 3, soma(){return this.a + this.b + this.c}}


console.log(JSON.stringify(obj))
console.log(obj)

console.log()



// console.log(JSON.parse("{ a: 1, b: 2, c: 3}"))
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}'))
// unica forma correta de criar um JSON. parse
// aspas simples('') por fora e aspas duplas("") para cada chave

console.log(JSON.parse('{ "a": 1.8, "b": "string", "c": true, "d": {}, "e": [] }'))

// Qualquer texto e atributos(chave) dentro do JSON tem que ser delimitado por aspas duplas
// Dentro do JSON pode ser adicionado booleans: ("c": true), Objetos ("d": {}) e também
// arrays ("e": [])