const nota_01 = 7;
const nota_02 = 7;
const nota_03 = 8;

media = (nota_01 + nota_02 + nota_03) / 3;
console.log(media);

if (media < 5) {
    console.log('Reprovado');
} else if (media <= 7) {
    console.log('Recuperação');
} else {
    console.log('Passou de semestre')
}