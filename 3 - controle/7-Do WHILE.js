function getInteiroAleatorioEntre (min, max) {
    const valor = Math.random () * (max - min) + min;
    return Math.floor(valor);
}

let opcao; // nao é necessario atribuir um valor inicial para o do While 


do {
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log(`valor = ${opcao}` )
} while (opcao != -1) 

console.log('pois valeu')


/*
        É NECESSARIO A CRIAÇÃO DE UMA VARIAVEL PARA SER ATRIBUIDO O VALOR DA FUNÇÃO

        POIS A FUNÇÃO SEMPRE QUE CHAMADA CRIARÁ UM VALOR ALEATORIO NAO DANDO PRA
        CHAMA-LA MAIS DE UMA VEZ SEM O NUMERO SER TROCADO 

        POR EXEMPLO CHAMLA NO WHILE PARA COMPARAR E NO PRINT PARA PRINTAR ELA RETORNARIA DOIS
        NUMEROS DIFERENTES

    while (getInteiroAleatorioEntre(-1, 10) != -1) {
        console.log(`valor = ${getInteiroAleatorioEntre(-1, 10)}` )
    } 

    verificaria um numero e printaria outro

*/