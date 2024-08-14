function estaEntre(numero, minimo, maximo, inclusivo = false) {
    switch(inclusivo){
    case false:
        if(minimo < numero && numero < maximo){
            console.log(true)
        }else{
            console.log(false)
        }
        break
    case true:
        if(minimo <= numero && numero <= maximo){
            console.log(true)
        }else{
            console.log(false)
        }
        
    }
    

}


estaEntre(10, 5, 30)
estaEntre(10, 20, 30)

estaEntre(10,10,30,true)
estaEntre(10,10,30)
