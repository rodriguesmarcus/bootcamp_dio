const fs = require('fs')
const path = require('path')
const basePath = './assets/'

// -------------------------------------------------------------------------- //

/** Leitura SÍNCRONA */

// // Lemos o arquivo invictus

// console.log('Begin')

// const content = fs.readFileSync(path.resolve(basePath, 'invictus.txt'))
// console.log(content.toString())

// console.log('End')

// console.log('')

// // Leitura de todos os arquivos da pasta

// console.log('Begin')

// const files = fs.readdirSync(path.resolve(basePath))

// const sentences = files.filter((file) => /s[1-4].txt/gi.test(file))

// for (const sentence of sentences) {
//     const text = fs.readFileSync(path.resolve(basePath, sentence)).toString()
//     console.log(text, '\n')
// }

// console.log('End')

// -------------------------------------------------------------------------- //

// /** Leitura ASSÍNCRONA, quando executamos o código abaixo, percebemos que Begin
//  * e End são executados antes do texto, provanto a assincronicidade da função
//  */

// console.log('Begin')

// fs.readFile(path.resolve(basePath, 'invictus.txt'), {encoding: 'utf-8'}, (err, data) => {
//     if (err) throw err
//     console.log(data)
// })

// console.log('End')

// // Para limparmos o código, a função que lida com o erro pode ser extraída

// function cb (err, data) {
//     if (err) throw err
//     console.log(data)
// }

// // A nova função de leitura ficará:

// console.log('Begin')

// fs.readFile(path.resolve(basePath, 'invictus.txt'), {encoding: 'utf-8'}, cb)

// console.log('End')

// // como ler os textos individualmente e assíncrono?


// console.log('Begin')

// const files = fs.readdirSync(path.resolve(basePath))

// const sentences = files.filter((file) => /s[1-4].txt/gi.test(file))

// for (const file of sentences) {
//     fs.readFile(path.resolve(basePath, file), {encoding: 'utf-8'}, cb)
// }

// console.log('End')

// /** No caso acima não só a leitura é feita de forma assíncrona, fazendo com que
//  * o texto seja exibido de forma aleatória, pois a exibição só depende do tempo
//  * de execução do 'serviço', como gera uma inconsistência no sentido da leitura
//  * como resolver isso sem entrar num callback hell?
//  */

// // Callback hell

// fs.readFile(path.resolve(basePath, 's1.txt'), {encoding: 'utf-8'}, (err, data) =>{
//     cb(err, data)
//     fs.readFile(path.resolve(basePath, 's2.txt'), {encoding: 'utf-8'}, (err, data) =>{
//         cb(err, data)
//         fs.readFile(path.resolve(basePath, 's3.txt'), {encoding: 'utf-8'}, (err, data) =>{
//             cb(err, data)
//             fs.readFile(path.resolve(basePath, 's4.txt'), {encoding: 'utf-8'}, (err, data) =>{
//                 cb(err, data)
//             })
//         })
//     }) 
// })

// // Fugindo do Callback Hell

// fs.readdir(path.resolve(basePath), (err, files) =>{
//     if (err) throw err
//     files
//         .filter((file) => /s[1-4].txt/gi.test(file)) // filter the files
//         .forEach((sentenceFile) => { // for each sentence, reads and prints (async)
//             fs.readFile(path.resolve(basePath, sentenceFile), {encoding: 'utf-8'}, cb) // will print unordered
//         })
// })


function cb (err, data, index, max) {
    if (err) throw err
    console.log(data)
    return start(index + 1, max)
}

console.log('Begin\n')
start(1,4)
console.log('\nEnd')

function start(index, max){
    if (index>max) return
    fs.readFile(
        path.resolve(basePath, `a${index}.txt`),
        { encoding: 'utf-8' },
        (err, data) => cb (err, data, index, max)
    )
}