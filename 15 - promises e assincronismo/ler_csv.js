const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')

// Forma de promises usando Async e Await
async function buscarArquivo() {
    try {
        const arquivo = await fs.promises.readFile(filePath)
        const textoDoArquivo = arquivo.toString('utf-8')
        console.log(textoDoArquivo)
    } catch (error) {
        console.log(error)
    } finally {
        console.log("Fim!")
    }  
}

buscarArquivo()

/* Forma clássica de fazer promises
const promiseReadFile = fs.promises.readFile(filePath)

promiseReadFile
    .then((arquivo) => arquivo.toString('utf8'))
    .then((textoDoArquivo) => textoDoArquivo.split('\n').slice(1))
    .then((linhasSemCabecalho) => linhasSemCabecalho.map((linha) => {
        const [nome, feito] = linha.split(';')
        return {
            nome,
            feito: feito.trim() === 'true' //o trim tira os espaços do texto
        }
    }))
    .then((listaDeTarefas) => console.log(listaDeTarefas))
    .catch((error) => console.log('Erro', error))
*/
