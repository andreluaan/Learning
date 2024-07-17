// usando a notação literal

const obj1 = {
    nome: 'paulo',
    sobrenome: 'joão'
}
console.log(obj1)

console.log(typeof Object,'roal', typeof new Object)


const obj2 = new Object
obj2.nome = 'Paula'
obj2.sobrenome = 'Tejano'
console.log('\n',obj2)


// função construtora

function Produto(nome, sobrenome,preco,desc){
    this.nome = nome
    this.sobrenome = sobrenome
    this.getPrecoComDesc = () =>{
        return preco * (1 - desc)
    }
}


const p1 = new Produto('caneta','teucu', 7.99, 0.15)
const p2 = new Produto('Notebook','otario', 2900, 0.25)
console.log(p1.getPrecoComDesc(), p2.getPrecoComDesc())

// Função Factory

function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}


const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 1000, 1)
console.log(f1.getSalario(), f2.getSalario())


const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)


// Um função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)

