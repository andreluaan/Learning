/*Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */




const minBallot = function (value) {
    const conNot = [
        {ballot: 100, amount:0 },
        {ballot: 50, amount:0 },
        {ballot: 20, amount:0 },
        {ballot: 10, amount:0 },
        {ballot: 5, amount:0 },
        {ballot: 1, amount:0 }
    ]
    while(value !== 0){
        if(value >= 100){
            value = value - 100
            const nota = conNot.find(bal => bal.ballot === 100)
            nota.amount  += 1
        }else if(value >= 50){
            value = value - 50
            const nota = conNot.find(bal => bal.ballot === 50)
            nota.amount += 1
        }else if(value >= 20){
            value = value - 20
            const nota = conNot.find(bal => bal.ballot === 20)
            nota.amount += 1
        }else if(value >= 10){
            value = value - 10
            const nota = conNot.find(bal => bal.ballot === 10)
            nota.amount += 1
        }else if(value >= 5){
            value = value - 5
            const nota = conNot.find(bal => bal.ballot === 5)
            nota.amount += 1
        }else if(value >= 1){
            value = value - 1
            const nota = conNot.find(bal => bal.ballot === 1)
            nota.amount += 1
        }
    }
}

minBallot(200)
minBallot(350)