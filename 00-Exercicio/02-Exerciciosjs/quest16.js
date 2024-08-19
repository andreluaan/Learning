const mult4 = e => e % 4 === 0
const mult400 = e => e % 400 === 0
const mult100 = e => e % 100 === 0


function checarAnoBissexto(ano) {
    return(mult4(ano) && mult100(ano)) || mult400(ano)
}



console.log(checarAnoBissexto(2100))