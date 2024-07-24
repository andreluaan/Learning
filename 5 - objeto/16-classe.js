class Avo{
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)
    // super class do pai é Avo  
    // entao ele chama o sobrenome da class superior Avo 
    this.profissao = profissao

    }
}


class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}


const filho = new Filho
console.log(filho)