// ) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
// crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
// quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.

function crescimento(altura1, tx1, altura2, tx2){
    if(altura1 == altura2){
        if(tx1 > tx2){
            return 'A criança 1 ultrapassará a altura da criança 2 em 1 ano'
        }else if (tx1 < tx2) {
            return 'A criança 2 ultrapassará a altura da criança 1 em 1 ano'
        }else{
            return 'As crianças cresceram igualmente'
        }
    }else{
        if(altura1 > altura2){
            if(tx1 >= tx2){
                return 'A criança 2 não ultrapassará a criança 1'
            }else{
                return `A criança 2 ultrapassará a criança 1 em ${calcularTempo(altura1, tx1, altura2, tx2)} anos`
            }
        }else{
            if(tx2 >= tx1){
                return 'A criança 1 não ultrapassará a criança 2'
            }else{
                return `A criança 1 ultrapassará a criança 2 em ${calcularTempo(altura1, tx1, altura2, tx2)}`
            }
        }
    }

}

function calcularTempo(altura1, tx1, altura2, tx2){
    let alturaMenor
    let alturaMaior
    let txAlturaMaior
    let txAlturaMenor
    let qtdAnos = 0
    if (altura1 > altura2){
        alturaMaior = altura1
        txAlturaMaior = tx1
        alturaMenor = altura2
        txAlturaMenor = tx2
    }else{
        alturaMaior = altura2
        txAlturaMaior = tx2
        alturaMenor = altura1
        txAlturaMenor = tx1
    }

    while(alturaMenor < alturaMaior){
        console.log(alturaMaior, alturaMenor)
        alturaMenor += txAlturaMenor
        alturaMaior += txAlturaMaior
        qtdAnos++
    }
    console.log(qtdAnos)
    return qtdAnos
}



console.log(crescimento(150, 5, 130, 10))

