



function removerPrioridade(object, propriedade) {
    console.log(propriedade)
    delete object.propriedade

    console.log(object)
}
console.log(object)

removerPrioridade({a: 1, b: 2}, "a")