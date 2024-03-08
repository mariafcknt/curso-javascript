//o protótipo é uma base para o objeto

const pessoa = {
    genero: 'feminino'
}

const maria = { //esse objeto extende pessoa
    nome: 'Maria',
    idade: 20,
    __proto__: pessoa //está herdando as propriedades de pessoa
}

//console.log(maria.genero);

//função construtora

function Pessoa(nome, idade){ //começa com letra maiúscula
    this.nome = nome;
    this.idade = idade;
}

const renan = new Pessoa('renan', 30);
//console.log(renan);

Pessoa.prototype.falar = function(){
    console.log(`Meu nome é ${this.nome}`);
}

renan.falar();


/* sintaxe equivalente ao que está acima

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;

        falar() {
            console.log(`Meu nome é ${this.nome}`);
        }
    }
}
*/

