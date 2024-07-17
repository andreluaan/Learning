// CLASSE COM CONSTRUCTOR
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





// COM ARROW FUNCTION 
const createPerson = (name, surname) => {
    return {
        talk: () => console.log(`Meu nome é ${name} ${surname}`)
    }
}

const p2 = createPerson('joão', 'Paulino')
p2.talk()