
const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false },
    {nome: 'Maria', nota: 9.2 , bolsista: true },
    {nome: 'Pedro', nota: 9.8, bolsista: true },
    {nome: 'Ana', nota: 8.7, bolsista: true }
]



// Desafio 1: Todos os alunos são bolsistas
 
const trueOuFalse = (resultado, bolsista) => resultado && bolsista

const bolsistas = alunos.map(a => a.bolsista).reduce(trueOuFalse)
console.log(bolsistas)

const algumBolsista = (resultado, bolsista) => resultado || bolsista

const bolsa = alunos.map(a => a.bolsista).reduce(algumBolsista)
console.log(bolsa)

