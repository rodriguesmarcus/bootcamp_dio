// Tradicionalmente para realizar requisições era utilizada uma API do browser chamada XML HTTP Request
// Mas lidar com callbacks pode ser complicado e podemos entrar nos callback hell, para isso foi
// introduzida a API fetch, que utiliza promises.

// fetch('/data.json').then(responseStream => {
//     console.log(responseStream);
// });

// Se quisermos obter os dados desse json, preciso processar o stream e aí obter o valor.

// fetch('/data.json').then(responseStream => {
//     responseStream.json().then(data => {
//         console.log(data);
//     }); //o stream já retorna uma promise, então usamos o método then para pegar os dados
// });

// Mas bastaria retornar uma promise no meu primeiro then, que encadearia (flashmap) retornando uma promise

// fetch('/data.json') // (http://localhost:808) _forçar erro de rede
//     .then(responseStream => responseStream.json()) //o stream já retorna uma promise, então usamos o método then para pegar os dados
//     .then(data => {
//         console.log(data);
//     }).catch(err =>{ //caso tenhamos um erro de rede, trataremos aqui (forçado acima)
//         console.log('Erro: ', err)
//     })

// o fetch só vai dar um erro na promise caso aconteça algum erro de rede, status !== 200

// fetch('/data.json')
//     .then(responseStream => {
//         if (responseStream.status === 200) { // garantimos que ele só irá passar se o código for 200
//             return responseStream.json();
//         } else {
//             throw new Error('Request error');
//         }
//     })
//     .then(data => {
//         console.log(data);
//     }).catch(err => {
//         console.log('Erro: ', err)
//     })

// Os response status é uma maneira boa de lidar com requests por sua simplicidade e pelo seu retorno ser uma promise

// o fetch também pode receber outros métodos dentro de seu argumento

// fetch('http:localhost:8080/data.json', /** { method: 'post', body: JSON.stringify} por padrão o método do fetch é o get*/
// )
//     .then(responseStream => {
//         if (responseStream.status === 200) { // garantimos que ele só irá passar se o código for 200
//             return responseStream.json();
//         } else {
//             throw new Error('Request error');
//         }
//     })
//     .then(data => {
//         console.log(data);
//     }).catch(err => {
//         console.log('Erro: ', err)
//     })

// ES7 - Async / Await
// São formas de criar promises de maneira mais simples e de lidar com promises aninhadas de maneira mais enxuta

const simpleFunction = async () => { // só de colocar o async já transforma em uma promise
    return 123;
}

console.log(simpleFunction()); // retorna o objeto 

simpleFunction().then(data => { // retorna o valor do objeto
    console.log(data);
})

// tratando um erro

const simpleFunctionErr = async () => {
    throw new Error('oh no.'); // força um erro
    return 123;
}

simpleFunctionErr()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })

// Podemos observar que essa é uma forma bem simples de criar e resolver promises. Mas o async não é muito utilizado
// sozinho, vindo normalmente acompanhada do await, que funciona como um hold para que as outras promises sejam
// resolvidas

const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(123);
    }, 2000)
});

const simpleFunctionAsync = async () => {
    const data = await asyncTimer(); // faz com que a função aguarde a resolução da promise asyncTimer() para retornar o dado
    console.log(data)
    const dataJSON = await fetch('/data.json').then(resStream => resStream.json())
    return dataJSON
};

// essa é uma forma de lidar com parâmetros assíncronos de forma sequencial (sequencial não é síncrono)

simpleFunctionAsync()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })

// o await permite que tenhamos um processamento assíncrono e sequencial, caso quisessemos que o resultado fosse paralelo
// usaríamos o Promise.all

const simpleFunctionAll = async () => {
    const data = await Promise.all([asyncTimer(), fetch('/data.json').then(resStream => resStream.json())])
};

simpleFunctionAll()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })