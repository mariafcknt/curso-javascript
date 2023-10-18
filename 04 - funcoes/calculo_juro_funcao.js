function calcularValor(forma_pagamento, preco) {
    if (forma_pagamento === 1) {
        console.log(aplicarDesconto(preco, 0.10)); 
    } else if (forma_pagamento === 2) {
        console.log(aplicarDesconto(preco, 0.15));
    } else if (forma_pagamento === 3) {
        console.log(preco);
    } else {
        console.log(aplicarJuros(preco, 0.10)); 
    }
}

function aplicarJuros(preco, juro) {
    return preco + (preco * juro);
}

function aplicarDesconto(preco, desconto) {
    return preco - (preco * desconto);
}

(function() {
    calcularValor(1, 100);
})()