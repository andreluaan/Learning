const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10 : //if
        case 9 :  //if else
            console.log('Quadro de honra')
            break // padrao pra executar ate onde é necessario
        case 8 : case 7:
            console.log('aprovado');
            break
        case 6: case 5: case 4:
            console.log('recuperação');
            break
        case 3: case 2: case 1: case 0:
            console.log('reprovado!');    
            break
        default: //else
            console.log('nota invalida!!')
    }
}

imprimirResultado(0);
imprimirResultado(5.7);
imprimirResultado(9.9);-
console.log()

imprimirResultado('dois');
imprimirResultado(11);
imprimirResultado(-1);

// implementar o SWITCH com BREAK sempre, pois é o padrao da liguagem
// se caso nao for adicionado o BREAK nos casos eles continuam executando
// as sentenças dos outros casos sem nem verificar