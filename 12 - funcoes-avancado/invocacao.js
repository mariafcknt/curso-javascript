//formas de invocar funções

const pessoa = {
    nome: 'Maria',
    idade: 20
}

//invocação direta
function gritar(prefixo) {
    console.log(prefixo, this.nome)
}

//teste()

gritar.apply(pessoa, ['Olá']) 
gritar.call(pessoa, 'Olá')

