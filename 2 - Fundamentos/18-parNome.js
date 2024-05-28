// Par nome/valor

const saudacao = 'opa' // contexto léxico 1

function exec() {
    const saudacao = 'faalaaa' // contexto léxico 2
    return saudacao 
}

// Objetos são grupos aninhados de pares nome/valor

const Cliente = {
    nome:'pedro',
    idade: 32,
    peso: 90,
    endereço: {
        logradouro: 'Rua tal ',
        numero: 123,
        referecia: 'do lado de tal'
    }
}

console.log(saudacao);
console.log(exec());

console.log(Cliente);

