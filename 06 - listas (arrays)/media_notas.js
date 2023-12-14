/* Percorrer uma string no for

const nome = 'Maria Fernanda'

for (let i = 0; i < nome.length; i++) {
    const letra = nome[i];
    console.log(letra);
}*/

const notas = []

notas.push(5);
notas.push(10);
notas.push(10);

var acumulador = 0
for (let i = 0; i < notas.length; i++) {
    acumulador += notas[i]
}

const media = acumulador / notas.length
console.log(media)