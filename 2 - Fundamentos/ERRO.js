function tratarErroELancar(erro) {
    //throw new Error(' F TOTAL PARSERO')
    //throw 10 //aparece o 10 no erro
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}




function imprimirNomeGritado(obj) {
    try {
        console.log(obj.nome.toUpperCase() + '!!!!!!!');
    } catch (e){
        tratarErroELancar(e)
    } finally {

        console.log('FINAL')
    }

}


const obj = { nome: 'Roberto' };
imprimirNomeGritado(obj);


// continua aparecendo o erro mas POR CONTA do throw 
// no output o erro que é enviado ao usuario é enviado 
// com o que eu escrevi na função na linha 2