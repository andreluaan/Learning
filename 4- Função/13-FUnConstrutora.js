function Carro(velocidadeMax = 200, delta = 5) { // aceleração de 5 em 5
    // atributo privado
    let velocidadeAtual = 0

    // metodo pulblico
    this.acelerar = function () {
        if(velocidadeAtual + delta <= velocidadeMax ) {
            velocidadeAtual += delta // VelATUaL = velAtual + delta

        }else{
            velocidadeAtual = velocidadeMax
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}


const uno = new Carro
uno.acelerar()
uno.acelerar()
uno.acelerar()
//  o uno irá acelerar 3 vezes totalizando 5+5+5 = 15
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)

ferrari.acelerar();ferrari.acelerar();ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual(), 'RECEBA FRANCIESCO VERGULINE')




const corolla = new Carro(220, 30)
console.log()
console.log(corolla.getVelocidadeAtual(), 'km')

corolla.acelerar()
corolla.acelerar()
corolla.acelerar()

console.log(corolla.getVelocidadeAtual(), 'km')

