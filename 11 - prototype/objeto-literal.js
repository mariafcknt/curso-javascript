const pessoa = {
    genero: 'feminino'
}

/*const maria = {
    nome: 'Maria',
    __proto__: pessoa
}*/

const ana = Object.create(pessoa) //cria um objeto usando o protótipo
ana.nome = 'Ana'

console.log(ana.genero)

