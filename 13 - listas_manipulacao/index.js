//for each

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*
//FOR EACH

lista.forEach((value, i, listRef) => {
    console.log(value, i, listRef)
})

//FILTER

const listaNumerosPares = lista.filter((element) => {
    return (element % 2 === 0);
})
console.log(listaNumerosPares)

//MAP

class Pessoa {
    constructor(nome) {
        this.name = nome;
    }
}

const listaPessoa = [new Pessoa('Renan'), new Pessoa('Andressa'), new Pessoa('Vitor'), new Pessoa('José')]

const listaNomes = listaPessoa.map((element) => {
    return element.name
})
console.log(listaNomes)

//REDUCE

const somaNumeros = lista.reduce((previous, current) => {
    return previous + current
})
console.log(somaNumeros)*/

//JOIN

const lista2 = [{nome: 'Renan'}, {nome: 'Andressa'}, {nome: 'Vitor'}, {nome: 'Amanda'}]

console.log(
    lista2.map(e => e.nome)
    .filter((e) => e.startsWith('A'))
    .join('; ')
)
//console.log(lista.join("-"))