// Cadeia de protótipos (protorype chain)
Object.prototype.attr0 = '0'
const avo = { attr1: 'A'}
const pai ={ __proto__ : avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}

console.log(Object.entries(filho))
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)


Object.entries(filho).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`) //  e[0] : chave,   e[1] : valor
})
console.log()



const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta) {
        if (this.velAtual + delta <= this.velMax){
            this.velAtual = this.velAtual + delta
        }else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h `
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing: "subtitui" a variavel padrão
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro) 
// .setPrototypeOF : estebele um relação de dois objetos passando um
// como prototipo do outro objeto, neste caso:
// Object.setPrototypeOf(objeto, parametro de prototipo)
// o objeto Carro ta sendo passado com prototipo para o objeto Ferrari
// Object.setPrototypeOf(ferrari, prototipo de ferrari(carro))

Object.setPrototypeOf(volvo, carro)
console.log(ferrari)
console.log(volvo)


volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())


