/**
Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
 */


const anuidade = function(capInicial,mouth) {
    taxJuros = 5
    taxJuros = taxJuros/100
    tempoAplicacao = mouth

    montante = capInicial * Math.pow((1 + taxJuros), tempoAplicacao)
    montante = montante.toFixed(2)
    switch(mouth){
        case 1:
            console.log(`JANEIRO: valor ${capInicial}`);
            break;
        case 2:
            console.log(`FEVEREIRO: valor ${montante}`);
            break;
        case 3:
            console.log(`MARÇO: valor ${montante}`);
            break;
        case 4:
            console.log(`ABRIL: valor ${montante}`);
            break;
        case 5:
            console.log(`MAIO: valor ${montante}`);
            break;
        case 6:
            console.log(`JUNHO: valor ${montante}`);
            break;
        case 7:
            console.log(`JULHO: valor ${montante}`);
            break;
        case 8:
            console.log(`AGOSTO: valor ${montante}`);
            break;
        case 9:
            console.log(`SETEMBRO: valor ${montante}`);
            break;
        case 10:
            console.log(`OUTUBRO: valor ${montante}`);
            break;
        case 11:
            console.log(`NOVEMBRO: valor ${montante}`);
            break;
        case 12:
            console.log(`DEZEMBRO: valor ${montante}`);
            break;
        default: console.log("codigo não encontrado")

    }
}



anuidade(100,1)
anuidade(100,2)
anuidade(100,3)
anuidade(100,4)
anuidade(100,5)
anuidade(100,6)
anuidade(100,7)
anuidade(100,8)
anuidade(100,9)







