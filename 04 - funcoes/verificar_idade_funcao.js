function verificarIdade(idade) {
    if (idade >= 18) {
        console.log('Você é maior de idade');
    } else {
        console.log('Você é menor de idade');
    }
}

//Main
(function() {
    verificarIdade(10);
})()