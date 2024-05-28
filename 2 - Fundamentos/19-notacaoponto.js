console.log(typeof console);
console.log('');

console.log(Math.ceil(6.1));
// .ceil é usado pra arrendondar o numero pra o numero
// mais proximo que vem em seguida

// Math sendo um object e .ceil sendo a notacao ponto
// para acessar um função definida dentro do objeto Math

const obj1 = {}  // cria o objeto
obj1.nome = 'bola';  // objeto.'' = adiciona ao objeto 
obj1.marca = 'penalt';  // obj1.notacaoponto
console.log(obj1);
// ou obj1('nome') = 'bola'


const obj2 = {
    nome: 'bola',
    marca: 'penalt'
}
console.log(obj2);
// serve igualmente


function Obj(nome) {
    this.nome = nome;
    // faz com que o nome seja visivel
    this.exec = function(){
        console.log('exec....');
    }
}



const obj3 = new Obj('cadeira');
const obj4 = new Obj('mesa');
const obj5 = new Obj('mesa2');
console.log(obj3)
console.log(obj3.nome)
obj4.exec()