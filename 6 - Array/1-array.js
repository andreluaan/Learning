console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])


aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados,'\n')

// adicionadno Rafael a posição 9 o array passa a ter
// 10 posiçoes com as posiçoes sem valores atribuidos
// sendo undefined
aprovados[9] = 'Rafael'
console.log(aprovados)
console.log(aprovados.length,'\n')

// alteração no array original
console.log(aprovados)
aprovados.sort()
console.log(aprovados,'\n')
// .sort altera o array original ordenando ele no caso do 


//deletando  itens do array
delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2],'\n')
//retorna undefined pq o valro da posiçõa 1 foi excluido

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1)
console.log(aprovados)
// .splice adiciona elementos em um determinado indice ao mesmo tempo que remove se preferir
// .splice(primeiro elemento, até esse elemento ) no caso
// .splice(1, 2) exclui do elemento 1 ao elemento 2
// .splice(2, 5) exclui do 2 ao elemento 5 splice.(1,1) exclui de 1 ao 
aprovados[1] = 'Carlos'
console.log(aprovados)
aprovados.splice(1, 2, 'elemento1', 'elemento2')
// ao ao mesmo tempo que está excluindo está sendo adicionado em ordem os elementos
// que estão apos o segundo paramentro do metodo .splice
// 'elemento1' vai ser adicionado no lugar do primeiro deletado e o
// 'elemento2' vai ser adicionado no lugar do segundo deletado
console.log(aprovados) 