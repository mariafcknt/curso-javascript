/*
var var1 = 10;

var var2 = '20';

- O JavaScript apenas subtrai números então quando é outro tipo
ele tenta converter o tipo da variável para fazer a operação

console.log(var1 - var2); = - 10
*/

//O var só se restringe ao escopo global e de funções
//A diferença entre var e let é que o let se restringe ao bloco em que está inserido (if, for, while, function, etc)
//O const é igual ao let mas não permite reatribuições

const pi = 3.14;
console.log(pi)

if (true) {
    //let nome = 'Paulo';
    var idade = 28;
}

//console.log(nome) //não vai printar nada pois a variável nome existe apenas dentro do bloco do if
console.log(idade) //vai printar pois a variável idade está no escopo global