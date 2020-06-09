// encadeamento de promises

const coinFlip = new Promise((resolve, reject) => Math.random() > 0.5 ? resolve('Yeah') : reject('Oh no.'))

coinFlip
    .then((data) => console.log(data, '1')) // o valor retornado de um then irá para o próximo then
    .then(() => console.log('End 1'))
    .catch((err) => console.log('Erro 1')) // quando você tem um erro ele busca primeiro o catch, cada catch só vale para 1 then.