Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}



const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('CLUTHER!!!');
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado pai')
    }else if(nota.entre(4, 6.99)){
        console.log('recuperação papae')
    }else if(nota.entre(0, 3.99)){
        console.log('REPROVADO')
    }else {
        console.log('Nota invalida!!')
    }
    console.log("fim")
    console.log()
}
 
imprimirResultado(2);
imprimirResultado(7.9);
imprimirResultado(10);
imprimirResultado(6);