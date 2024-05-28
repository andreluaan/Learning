let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1
console.log(!!isAtivo); // ! serve como uma negação
console.log(!isAtivo); 

/*
quando utilizado sozinho ! ele nega o tipo o oposto do seu valor

e quando usado !! ele nega duas vezes, tornando assim 
'nao nao' ou seja cancela a negação servindo como 
console.log(isAtivo) normal

*/
console.log('\n')
console.log(!3);
console.log(!!3);
// quando é utilizado ! ele converte o valor pra verdadeiro ou falso

console.log(!!'  ');//string
console.log(!![]);  // array
console.log(!!{});  // objeto literal
console.log(!!Infinity); // divisao por 0
console.log(!!(isAtivo = true))

console.log('\n');
//falsos
console.log(!!0);
console.log(!!''); //string vazia sem espaços é falso
console.log(!!null); // nulo
console.log(!!NaN);// not a Number
console.log(!!undefined); //indefinido
console.log(!!(isAtivo = false));

console.log('para finalizar...');
console.log(!!('' || null || 0 || 'epa')); 
console.log(('' || null || 0 || 'epa')); 
// dentro de um contexto ele volta apenas o valor verdadeiro
// e ve tudo como verdadeiro
console.log('\n')


// a expreção "||" siginifica OU
let nome = 'lucas';
console.log(nome || 'Desconhecido');
// se o primeiro nao for valido ou verdadeiro ele usaria a segunda string
let nome2 = ''
console.log(nome2 || 'Desconhecido');




