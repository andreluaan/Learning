const pessoa = {
    saudacao: 'bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

// this está acessado a saudacao do objeto pessoa

// mesmo ele estando dentro da função ele chama
// saudacao do objeto que ele está dentro do escopo

pessoa.falar()

/*
    irá gerar um erro na run caracterizada como:
    se caso a função this. for retirada do console 
    saudacao is not defined
*/

const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

// resultado de pessoa.falar.bind(pessoa) é amarrada a constante
// falarDePessoa