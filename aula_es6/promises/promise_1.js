// intro ao .then

const promise = new Promise((resolve, reject) =>{
    setTimeout(() => reject('End'), 2000) // executa o end depois de 2 segundos.
    // aqui podemos executar um fetch em um website
})

console.log('Begin')

/** iniciando uma promise */

// promise.then((data) => console.log(data)) #1 forma
// promise.then(console.log) #2 forma

// .catch((err) => console.log('ops', err))
// promise.then((data) => console.log(data)).catch((err) => console.log('ooops', err))

// promise.then((res) => {}, (rej) => {}) // #3 forma
