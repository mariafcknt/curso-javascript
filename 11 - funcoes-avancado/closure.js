function soma(x) { //o x mantém seu valor como se fosse uma constante, guardando o contexto em que foi criado
    return function(y) {
        return x + y;
    }
}

const somaParcial = soma(10)

console.log(somaParcial(20))
console.log(somaParcial(30))
console.log(somaParcial(40))

//console.log(soma(10)(20))