function inverso (elemento) {
    tipo = typeof elemento
    if (tipo === "number"){
        console.log(elemento * -1)
    }else if(tipo === "boolean"){
        console.log(!elemento )
    }
}


inverso(2)
inverso(true)
