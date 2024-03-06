/* 
    boolean
    null - ausência de valor
    undefined - ausência de declaração
    number
    string
    symbol
*/

// object

console.log(!''); //negando a string ela vira um boolean


//formas de representar strings

var s1 = "texto";
var s2 ='texto';
var s3 = `texto`;

//Symbol - garante que a variável é única e imutáveç

const s = Symbol('10');
console.log(s);

//Objetos

const pessoa = {
    nome: 'Maria',
    idade: 30,
    falar: function(){
        console.log(`Meu nome é ${this.nome}`)
    }
    
}

//formas de acessar e reatribuir os atributos do objeto

pessoa['nome'] = 'Carlos';

console.log(pessoa.nome);
console.log(pessoa['nome']);

const y = pessoa.falar
pessoa.falar()
y()

