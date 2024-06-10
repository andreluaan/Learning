// novo recursodo ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    mae: 'rafaela',
    endereço: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

console.log(pessoa.nome);
console.log(pessoa.endereço);

//destruturing -------------------------------------------------------------------------------

const {nome, idade} = pessoa
console.log(nome, idade);

// console.log(endereço);
// ocorre erro pois endereço nao foi destruturado do objeto pessoa

const { nome: nomeP, idade: idadeP} = pessoa
console.log(nomeP, idadeP);
// Forma de Modificar o nome do objeto para ser utilizado melhor





console.log('')
const { sobrenome, bemHumorada} = pessoa
console.log(sobrenome, bemHumorada);


const{sobrenome1, bemHumorada1 = true} = pessoa;
console.log(sobrenome1, bemHumorada1);

const { endereço: {logradouro, numero, cep}} = pessoa;
console.log(logradouro, numero, cep);





console.log('')
//const { conta: { agencia, number }} = pessoa
// ocorre erro pois o caminho para chegar no dado agencia e number
// nao existe
const {  agenci1a, numbe1r } = pessoa
//mas assim funciona mesmo sendo undefined
console.log(agenci1a, numbe1r);









// destruturing--------------------------------------------------------------------------------