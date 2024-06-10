

// ESCOPO GLOBAL E SEUS PROBLEMAS

// RUNTIME


let  a = 3;
var b = 2

global.c = 123;

this.d = 456;
this.e = false;
this.f = 'teste';

console.log(a);
console.log(global.b);
console.log(global.c);
console.log(this.d);
console.log(module.exports.e);
console.log(module.exports === this);

console.log()



console.log(this)
console.log(module.exports);

console.log()

abc = 4;
console.log(abc);
console.log(global.abc);

//  nao criar uma variavel global em geral
//  pois ela pode ser modificada em QUALQUER escopo
//  isso da mais problomas do que soluções
