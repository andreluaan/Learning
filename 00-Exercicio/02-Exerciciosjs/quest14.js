function objetoParaArray(objeto) {
    return Object.entries(objeto)
}








console.log(objetoParaArray({
    nome: "Maria",
    profissao: "desenvolvedora de softwere"
}))

objetoParaArray({
    codigo: 11111,
    preco: 12000
})