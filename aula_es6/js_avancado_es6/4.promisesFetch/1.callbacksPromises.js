// Callbacks e Promises

function doSomething(callback) {
    setTimeout(function () {
        // did something
        callback('First data');
    }, 1000);
}

function doOtherThing(callback) {
    setTimeout(function () {
        // did other thing
        callback('Second data');
    }, 1000);
}

function doAll() {
    doSomething(function (data) {
        var processedData = data.split('');// exemplo: dar um split nos dados

        doOtherThing(function (data2) {
            var processedData2 = data2.split('');

            setTimeout(function () {
                console.log(processedData, processedData2)
            }, 1000);
        })
    })
}

// doAll()

// Parece que a função por estar funcionando essa foi a melhor maneira de realizar o trabalho, mas se os dados não viessem, ou em cada etapa
// precisássemos realizar algum tipo de tratamento de dado? Lidar com todos os erros em todas as etapas faz com que caiemos no que é conhecido
// como Callback Hell

function doAllTreated() {
    try {
        doSomething(function (data) {
            var processedData = data.split('');// exemplo: dar um split nos dados

            try {
                doOtherThing(function (data2) {
                    var processedData2 = data2.split('');

                    try {
                        setTimeout(function () {
                            console.log(processedData, processedData2)
                        }, 1000);
                    } catch (err) {
                        //handle error
                    }
                })
            } catch (err) {
                // handle error
            }

        })
    } catch (err) {
        // handle error
    }
}

// doAllTreated()

// Refatorando o código usando promises

const doSomethingPromise = new Promise((resolve, reject) => { // aqui invocamos o construtor de promise passando uma função que receberá como argumento o resolved e o reject
    setTimeout(() => {
        resolve('First data');
    }, 1000); // não precisamos instanciar o try.. catch, porque como estamos em estrutura de promise, qualquer erro será jogado no nosso reject
})

const doOtherThingPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve('Second data');
    }, 1000);
})

// Se quisermos executá-las de maneira sequencial: 

// console.log(doSomethingPromise) // retorna Promise { <pending> }, porque ela só será resolvida depois de 1s que acontecerá depois desse console.log

// a Promise tem 3 estados
// Pending - quando está em execução
// Fulfilled - quando terminou de executar
// Rejected - caso aconteça algum erro

// para conseguirmos executar o console.log de forma correta devemos usar o .then() 

// doSomethingPromise.then(data => console.log(data)) // a função no then realizará a execução CASO a Promise complete com sucesso.

// caso aconteça algum erro

// const doSomethingPromiseErr = new Promise((resolve, reject) => {
//     throw new Error('Something went wrong'); // forçando um erro

//     setTimeout(() => { // o código não será executado por causa do throw
//         resolve('First data');
//     }, 1000);
// })

// doSomethingPromiseErr
//     .then(data => console.log(data)) // o nosso then não acontece e dispara um erro global, 
//     .catch(error => console.log(error)) // aqui conseguimos tratar os erros de execução, sem colocar try..catch, deixando mais simples.

// E se quisermos pegar os dados da primeira promise e depois invocar uma nova promise?

// doSomethingPromise
//     .then(data => { console.log(data.split('')); return doOtherThingPromise }) // exibe o primeiro dado e chama a segunda promise
//     .then(data2 => console.log(data2.split('')))
//     .catch(error => console.log(error))

// Caso queiramos que executem de forma síncrona, fazendo uma função que gere essa promise

const doSomethingPromiseFn = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('First data');
    }, 1000);
});

const doOtherThingPromiseFn = () => new Promise((resolve, reject) => {
    // throw new Error('Something wrong') // forçar erro

    setTimeout(function () {
        resolve('Second data');
    }, 3000);
});

doSomethingPromiseFn()
    .then(data => {
        console.log(data.split(''));
        return doOtherThingPromiseFn()
    })
    .then(data2 => console.log(data2.split('')))
    .catch(error => console.log(`Ops... ${error}`)) // Lembrando que o catch só se 'responsabiliza' por UM then

// Usando o promise com função conseguimos o mesmo resultado do doAllTreated de forma mais legígel e síncrona, lembrando que poderíamos optar
// pela forma assíncrona obtendo o mesmo resultado

// Podemos executar essas duas em paralelo também, usando o método Promise.all

Promise.all([doSomethingPromiseFn(), doOtherThingPromiseFn()]).then(data => {
    console.log(data)
}) // Conseguimos executar as duas ao mesmo tempo e retornando o valor apenas quando as duas são resolvidas

// Podemos também executar o split nos dois resultados, como anteriormente:

Promise.all([doSomethingPromiseFn(), doSomethingPromiseFn()]).then(data => {
    console.log(data[0].split(''));
    console.log(data[1].split(''));
}).catch() // caso queiramos tratar algum erro basta inserir o .catch, caso joguemos um throw error, ele pularia as duas execuções e executaria apenas o catch

// Outra forma para lidar com múltiplas Promises, mas dessa vez, executando o que resolver primeiro é o método .race

Promise.race([doOtherThingPromiseFn(), doSomethingPromiseFn()]).then( data => {
    console.log(data)
})

// O uso de Promises faz com que trabalhar de forma assíncrona seja limpo e simples.
