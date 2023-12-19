const {gets, print} = require('./ex01_funcoes_auxiliares.js');

function calcMedia(media) {
    if (media < 5) {
        print('Reprovado');
    } else if (media < 7) {
        print('Recuperação');
    } else {
        print('Aprovado');
    }
}

calcMedia(gets());
calcMedia(gets());
calcMedia(gets());

