var numero = 1 ;
{
        var numero = 2;
        console.log('dentro =', numero);
}

console.log('fora =', numero);

/*
    A execução disso não funciona pois trancar com chaves 
    Não indica a varíavel deixa de ser global
*/