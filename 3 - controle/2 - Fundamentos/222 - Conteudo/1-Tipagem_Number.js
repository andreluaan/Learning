


//formar de criar um numa variavel com numero

const peso1 = 1.0;
const peso2 = Number('2.0');
const peso3 = 3.1;

console.log(peso1,peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));
console.log(Number.isInteger(peso3));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;


//avaliacao1 tem peso1 e avaliacao2 tem peso2
const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2));
// funcao .toFixed para limitar as casas decimais

console.log(media.toString(2));
// funcao .toString para converter em binário

console.log(typeof media);
console.log(typeof Number);