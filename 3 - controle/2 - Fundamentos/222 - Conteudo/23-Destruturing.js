function rand ({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);


}

const obj = { max: 90, min: 70};
console.log(rand(obj));


console.log(rand({max: 60, min : 20}));

console.log('');
let b = Math.random() * 10;
console.log(Math.floor(b));
console.log(Math.random()*2);



