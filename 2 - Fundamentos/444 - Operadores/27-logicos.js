// Operadores logicos

/*
------- TABELA VERDADE -------

v e v -> v      ' tem que ser os dois verdadeiros'
v e f -> f
v e ? -> f


v ou ? -> v      ' tem que ter pelo menos 1 verdadeiro'
f ou v -> v
f ou f -> f


esclusivo verdadeiro xor
v xor v -> f      'tem que ter só 1 verdadeiro
v xor f -> v       nao pode ser 2 e nem 0.'
f xor v -> v
f xor f -> f




*/


function Compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2; // OU
    const comprarTV50 = trabalho1 && trabalho2; // E
    //const comprarTV32 = !!(trabalho ^ trabalho2) bitwise xor
    const comprarTv32 = trabalho1 != trabalho2; // diferente/ ou excluivo
    const manterSaudavel = !comprarSorvete; // negação

    if (comprarSorvete == true)
        console.log('--Dale sorvetinho--')
    if (comprarTV50 == true)
        console.log('--RECEBA A TVZONA--')
    if (comprarTv32 == true)
        console.log('--Paia tvzinha--')
    if (manterSaudavel == true) 
        console.log('--Caba liso da misera--')


    return {comprarSorvete, comprarTV50, comprarTv32, manterSaudavel}
    
   
}

//console.log(Compras(true, true))
//console.log(Compras(true, false))
console.log(Compras(false, false))
//console.log(Compras(false, true))