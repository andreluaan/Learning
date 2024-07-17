class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname
    }

    talk() {
        console.log(`Meu nome é ${this.name} ${this.surname}`)
    }
}


const jao = new Person('João', 'Paulo')
jao.talk()


// factory
 
function createPerson(name, surname) {
    this.name = name
    this.surname = surname
    

    this.talk = function() {
        console.log(`Meu nome é ${this.name} ${this.surname}`)
    }
}

const p1 = new createPerson('joao', 'paulo')
p1.talk() 