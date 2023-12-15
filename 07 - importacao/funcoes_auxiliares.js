function gets() {
    const numeros_sorteados = [5, 50, 10, 98, 23];
    return numeros_sorteados;
}

function print(texto) {
    console.log(texto);
}


/*function maiorNumeroSorteado() {
    var omaior = 0;
    numeros = [5, 50, 10, 98, 23];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > omaior) {
            omaior = numeros[i]
        }
    }
    return omaior;
}*/

module.exports = {gets, print};