/*
 Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.


*/


function juroSimples(capInicial, taxJuros, tempoAplicacao) {
    taxJuros = taxJuros/100
    return capInicial * taxJuros * tempoAplicacao
}



function jurosComposto(capInicial, taxJuros, tempoAplicacao) {
    return montante = capInicial * Math.pow((1 + taxJuros), tempoAplicacao)
}

console.log(juroSimples(100,20,3))