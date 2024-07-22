const sequencia = {
    _value: 1, // convenção: mostrar aos outros desenvolvedores que é "privada"
    get value() {return this._value++},
    set value(value) {
        if(value > this._value){
            this._value = value
        }
    }
}


console.log(sequencia.value, sequencia.value)
sequencia.value = 1000
console.log(sequencia.value, sequencia.value)