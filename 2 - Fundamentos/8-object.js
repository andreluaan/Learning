const prod = {}; // criar um objeito vazio
console.log(prod)
const prod1 = {};

prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4998.90;
console.log(prod1);


// objeto é uma coleção de chave/valor nome ou indificador atribuido a 
//um valor


/*      oq é um objeto em javascript?

Objetos são como uma especie de "super variavel"
que armazenam uma "coleção de valores"

elas sao referenciados por nomes

em java script qual quer tipo de dado é um objeto
*/

const prod2 = {
    nome: 'camisa polo',
    valor : 79.90,
    dia : 13,
    mes : 'abril'
}

console.log(prod2)

const prod3 = {
    nome: 'camisa polo 2',
    valor : 20,
    dia : 14,
    mes : 'abril',
    obj : {
        numero : 1,
        obj : {
            numero : 2
        }
    }
}

console.log(prod3)

