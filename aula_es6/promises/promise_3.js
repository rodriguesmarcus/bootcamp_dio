// promisify

const fs = require('fs')
const path = require('path')
const basePath = './assets/'
const { promisify } = require('util') // não funciona com todas as funções, maioria das lib externa não funcionam
const readFileAsync = promisify(fs.readFile)

console.log('begin')
readFileAsync(path.resolve(basePath, 'invictus.txt'), { encoding: 'utf-8' })
    .then(console.log)
    .catch(console.error)
console.log('end')