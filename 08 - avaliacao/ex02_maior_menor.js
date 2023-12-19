const {gets, print} = require('./ex02_funcoes_auxiliares.js')

maior_par = 0;
menor_impar = 9999;
const numeros = gets();

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0 && numeros[i] > maior_par) {
        maior_par = numeros[i];
    } else if (numeros[i] % 2 === 1 && numeros[i] < menor_impar) {
        menor_impar = numeros[i];
    }
}

print(`Maior número par = ${maior_par}`)
print(`Menor número ímpar = ${menor_impar}`)
