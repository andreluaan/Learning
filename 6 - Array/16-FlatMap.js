const escola = [{
    nome: 'Turma m1',
    alunos: [{
        nome:' gustavo',
        nota: 9.1
    },{
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma m2',
    alunos: [{
        nome: 'rebeca',
        nota: 8.9 
    },{
        nome: 'roberto',
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotaDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotaDaTurma)
console.log(notas1)
console.log([].concat([ 9.1, 9.3 ], [ 8.9, 7.3 ]))

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaDaTurma)
console.log(notas2)