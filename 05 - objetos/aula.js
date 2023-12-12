class Pessoa {
    nome;
    idade;
    ano_nascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.ano_nascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} têm a mesma idade`);
    }
}

const ana = new Pessoa('Ana', 22);
const paulo = new Pessoa('Paulo', 22);

compararPessoas(ana, paulo);

/*
pessoa['nome'] = 'teste';
console.log(pessoa.nome)
*/
