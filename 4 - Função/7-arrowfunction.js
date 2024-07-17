let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implicito


let ola = function () {
    return 'olá'
}

ola = () => 'olá' //função sem parametro
ola = _ => 'olá' // possui parametro 
console.log(ola()); 