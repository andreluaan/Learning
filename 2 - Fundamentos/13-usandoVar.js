{
    {
        {
            {
                {
                    var sera = 'será???'
                }
            }
        }
    }
}
console.log(sera);

// escopo : o local onde aquela variável é visível ou acessível
// em outras linguagens a variavel só é visivel dentro do escopo {}


function teste() {
    var local = 123
    console.log(local)
}

teste();
//console.log(local); "local is not defined"
//nao imprime pois "local" está apenas dentro da função

/* var nível global:
    é a mesma variavel para todo o codigo se eu crio fora de
    um escopo na função 
*/

/* var nível num escopo de função: 
    ela só é visivel dentro da function
    diminuindo assim os riscos de erro em um código 
*/