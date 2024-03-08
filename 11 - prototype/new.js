/*function Pessoa(nome, idade) {
    this.nome = nome,
    this.idade = idade
}

Pessoa.prototype.falar = function () {
    console.log(`Meu nome é: ${this.nome}`)
}

//const maria = new Pessoa('Maria', 20)
const maria = {
    genero: 'feminino'
}

Pessoa.call(maria, 'nome', 20)

console.log(maria)*/

String.prototype.toPlang = function() {
    return `P ${this}`
}

console.log('teste'.toPlang())

print = function (texto) {
    console.log(texto)
}

print('Sla')
print('rs')

