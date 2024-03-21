const nota = 48;

calcularNota(nota);

function calcularNota(nota) {
    let notaArredondada = 0;
    if (nota % 5 != 0 && nota > 38) {
        notaArredondada = arredondarNota(nota);
        var notaFinal = compararNotas(nota, notaArredondada);
        foiAprovado(notaFinal);
        console.log(`A nota final é ${notaFinal}`);
    } else {
        foiAprovado(nota);
        console.log(`A nota final é ${nota}`);
    }
}

function arredondarNota(nota) {
    for (let i = 0; nota % 5 != 0; i++){
        nota += 1;
    }
    return nota;
}

function compararNotas(nota, notaArredondada) {
    if (notaArredondada - nota < 3) {
        nota = notaArredondada;
        return nota;
    } else {
        return nota;
    }
}

function foiAprovado(nota){
    if (nota >= 0 && nota < 40) {
        console.log('Reprovado');
    } else if (nota >= 40) {
        console.log("Aprovado");
    }
}