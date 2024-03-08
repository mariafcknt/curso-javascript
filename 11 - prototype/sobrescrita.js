const pessoa = {
    idade: 18,
    profissao: 'dev',
    pais: 'Brasil'
}

const maria = {
    nome: 'Maria',
    idade: 20,
    __proto__: pessoa,
    profissao: 'estudante'
}

console.log(maria.idade)
console.log(maria.profissao)
console.log(maria.pais)

//o código do objeto é todo percorrido e se ele achar a variável ela é usada, senão ele utiliza a variável do protótipo