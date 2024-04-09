//Assincronismo - Exemplo: pedir um arquivo ao SO e recebê-lo só quando ele terminar de abri-lo
//Solicitar algo que em algum momento será retornado, sem ter controle de quando

const promiseRandomNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
        const num = parseInt(Math.random() * 100)
        resolve(num) //se der certo
    }, 1000)

  // reject() //se der errado
})

console.log('Teste')

promiseRandomNumber.
    then((value) => {
        console.log(value)
        return value + 10
    })
    .then((value) => {
        console.log(value)
    }
    )
    .catch((error) => {
        console.error(error)
    })
    .finally(() => {
        console.log('Fim')
    })