//First class functions

//Higher order functions

/*function falarMeuNome() {
    console.log('Meu nome é Maria')
}

const referenciaNova = falarMeuNome

//referenciaNova()

function falarMeuNomeCompleto(falarMeuNome) {
    falarMeuNome()
    console.log('Fernanda')
    return falarMeuNome
}

falarMeuNomeCompleto(falarMeuNome)()

nomeDaFuncao()

//forma literal de declarar uma função
function nomeDaFuncao() { //vai ser jogada para cima pelo hoisting
    console.log('nomeDaFunção')
}

nomeDeOutraFuncao() //vai dar erro de undefined

//function expression
const nomeDeOutraFuncao = function() { //a const vai ser jogada para cima mas a sua atribuição (a function, no caso) não
    console.log('nomeDeOutraFunção')
}

nomeDaFuncao()
nomeDeOutraFuncao()*/

//função explícita
function funcao1() {
    console.log('Função 1')
    console.log(this)
}

//arrow function
const funcao2 = () => { //não tem o this
    console.log('Função 2')
    console.log(this)
}

const maria = {
    nome: 'Maria',
    funcao1,
    funcao2
}


maria.funcao1()
console.log(' ')
maria.funcao2()