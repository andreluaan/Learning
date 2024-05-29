function espaco(){
    console.log('')
}


function soBoaNoticia(nota) { 
    if (nota >= 7) {
        console.log("aprovado com " + nota);
    }
}

soBoaNoticia(8.1);
soBoaNoticia(6.1);


function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log('É verdade ' + valor);
    }

}

seForVerdadeEuFalo(true);
seForVerdadeEuFalo(false);
espaco();
seForVerdadeEuFalo(2);
espaco();
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo('');
seForVerdadeEuFalo(0);
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo('...');
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([]);
seForVerdadeEuFalo({});
seForVerdadeEuFalo([1, 2]);
