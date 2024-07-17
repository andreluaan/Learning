/* 
As regras para o cálculo dos anos bissextos são as seguintes: 
De 4 em 4 anos é ano bissexto; 
De 100 em 100 anos não é ano bissexto; 
De 400 em 400 anos é ano bissexto; 
Prevalecem as últimas regras sobre as primeiras. 
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a 
mensagem e retornando  true ou false.  */

//De 4 em 4 anos é ano bissexto; 

//De 100 em 100 anos não é ano bissexto; 

//De 400 em 400 anos é ano bissexto; 

function anoBissexto(ano) {
    let numero = ano
    let doisUltimosDigitos = numero % 100

    if(ano % 400 === 0){
        console.log(`${ano} é ano Bissexto\n`)
    }else if(ano % 100 === 0 ) {
        console.log(`${ano} Não é um ano Bissexto\n`)
    }else if(doisUltimosDigitos % 4 === 0){
        console.log(`${ano} é um ano Bissexto\n`)
    }else{console.log(`${ano} não é Bissexto\n`)}
}


anoBissexto(100)
anoBissexto(700)
anoBissexto(800)
anoBissexto(1928)
anoBissexto(2004)
