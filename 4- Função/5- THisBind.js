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
// se caso a função this. for retirada do console 
// irá gerar um erro na run caracterizada como:
//  saudacao is not defined

const falar = pessoa.falar
falar()