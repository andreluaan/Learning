console.log('01)', '1' == 1);
console.log('02)', '1' === 1); 
// estritamente igual nao pois ---- '1' é string e 1 é number

console.log('\n03)', '3' != 3);
console.log('04)', '3' !== 3);
// é extritamente diferente sim pois '3' é string e 3 é number

console.log('\n05)', 3 < 2 ); // 3 menor que 2?
console.log('06)', 3 > 2 ); // 3 maior que 2?
console.log('07)', 3 <= 2 ); // 3 é menor ou igual a 2?
console.log('08)', 3 >= 2 ); // 3 é maior ou igual a 2?

const data1 = new Date(0);  
// Date(0) é a data marco 0 ( 1 de janeiro de 1970)
const data2 = new Date(0);

console.log('\n09)', data1 === data2);
console.log('10)', data1 == data2);
// falso pois ele nao esta comparando a igualdade dos valores e sim
// do endereço de memoria

console.log('11)', data1.getTime() === data2.getTime());
// compara os valores
console.log(data1);
console.log(data2);


/*
        ==      é igual?
        ===     é extritamente igual? ( valor e tipo'string, number,boolean')

        <       é menor?
        >       é maior?
        <=      é maior ou igual?
        >=      é menor ou igual?
*/


