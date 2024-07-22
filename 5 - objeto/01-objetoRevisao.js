// coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'

console.log(produto)
console.log()

produto.preço = 220
console.log(produto, '\n')

delete produto.preço
delete produto.nome
console.log(produto, '\n')




const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario:{
        nome: 'Raul',
        idade: 56,
        endereco:{
            logradouro: 'Rua abc',
            numero: 234
        }
    },
    condutores : [{
        nome: 'junior',
        idade: 19
    },{
        nome: 'Ana',
        idade: '42'
    }]
}


console.log(carro, '\n')

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av gigante'


delete carro.condutores
delete carro.proprietario.endereco


