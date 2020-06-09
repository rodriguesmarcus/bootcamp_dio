// Utilizando Event Emitter -> só é compatível com o NodeJS

const EvenEmitter = require('events');

// // para utilizar a classe basta instanciá-la
// const emitter = new EvenEmitter();

// emitter.on('User logged', data => {
//     console.log(data);
// });

// emitter.emit('User logged', { user: 'Marcus Rodrigues'});

// De forma mais genérica

// Métodos customizados numa clase de eventos.

class Users extends EvenEmitter {
    userLogged() {
        // aqui poderíamos ter um setTimeout, e com isso podemos lidar com programação assíncrona e eventos.
        this.emit('User logged', { user: 'Marcus Rodrigues' })
    }
}

const users = new Users();

// users.on('User logged', data => {
//     console.log(data);
// });

// users.userLogged({ user: 'Marcus Rodrigues'});
// users.userLogged({user: 'Jose pacheco'})
// caso queira consumir apenas uma vez, há um método chamado .once

users.once('User logged', data => {
    console.log(data);
});

users.userLogged({ user: 'Marcus Rodrigues' }); // como utilizamos o .once, apenas esse primeiro será logado
users.userLogged({ user: 'Jose pacheco' });

// Outro método que podemos usar é o EventTarget, mas não temos o .once e outros métodos do emitter

