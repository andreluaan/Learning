const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'] 
console.log(' Array normal:','\n', pilotos)

pilotos.pop() 
console.log('\n','Apos o pilotos.pop(): ','\n',pilotos)
// massa quebra o carro
// .pop remove o ultimo elemento do arraylist

pilotos.push('Verstappen')
console.log('\n','Após o pilotos.push(Verstappen): ','\n',pilotos)
// verstappen é adicionado
// .push adiciona o elemento na ultima posição do array


pilotos.shift()
console.log('\n','Após o pilotos.shift():','\n',pilotos)
// .shift() remove o PRIMEIRO elemento do array

pilotos.unshift('Hamilton')
console.log('\n','Após o pilotos.unshift():','\n',pilotos)
// .unshift(valor ou elemento) adiciona um elemento na primeira posição do array


// .splice pode adicionar e remover com padrao de parametros

// adicionar: 

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log('\n','Após o pilotos.splice(2, 0, Bottas, Massa):','\n',pilotos)
// adicionou 2 elementos a partir da posição 2

// remover 
pilotos.splice(3,1)
console.log('\n','Após o pilotos.splice(3,1):','\n',pilotos)
// remove a partir da posição 3,  1 unico elemento que serai o elemento 3


const algunsPilotos1 = pilotos.slice(2) 
// slice 'pega' uma parte do array mas não modificando o original
// slice(2) copia os elemetos até a posição silce(posiçao) neste caso até
// a posição 2 do array original "pilotos"
// e Monta um novo array nomeado "algunspilotos1"

console.log('\n', algunsPilotos1)
console.log(pilotos)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log('\n','slice(1, 4) de pilotos', '\n',algunsPilotos2)
// nessa situação onde tem 2 paramentos para o método

// o slice(1, 4) vai fazer um novo elemento a partir da posição 1
// até a posição 4, massssss sem pegar a posição 4 tambem
// o slice vai até a posição anterior do segundo parametro
