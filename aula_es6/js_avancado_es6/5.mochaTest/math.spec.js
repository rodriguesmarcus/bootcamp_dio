// Por padrão temos algumas formas de descrever os testes, primeiro o describe:
const assert = require('assert');
const Math = require('./src/math.js')

// describe('Math class', function () {
//     it('Sum two numbers', function () { // it: descrever o comportamento esperado da minha classe
//         const math = new Math();
//         try {
//             assert.equal(math.sum(5, 5), 10); // irá retornar um erro, para lidar com isso? .catch()
//         } catch(err) {
//             console.log(err) // o teste passa mas gera um [ERR_ASSERTION]: undefined ==10
//         }

//     });
// });

//poderíamos disparar nosso próprio erro, causando a falha no teste

// describe('Math class', function () {
//     it('Sum two numbers', function () {
//         const math = new Math();

//         throw new Error('oh no.');
//         assert.equal(math.sum(5, 5), 10); // simplesmente descreve e garante o comportamento sem disparar o erro de forma manual.
//     });
// });
// qualquer erro que aconteça dentro da nossa estrutura irá falhar o teste

// Teste 1:

// describe('Math class', function () {
//     it('Sum two numbers', function () {
//         const math = new Math();
//         assert.equal(math.sum(5, 5), 10); // simplesmente descreve e garante o comportamento sem disparar o erro de forma manual.
//     });
// });

// escrevemos o teste descrevendo o valor esperado e escrevemos a função passando esse valor

// Teste 2 - código assíncrono -> retornando erro depois de passar:

// describe('Math class', function () {
//     it('Sum two numbers', function () {
//         const math = new Math();

//         math.sum(5, 5, value => {
//             assert.equal(value, 10); // como o método está assíncrono, o teste passa mesmo com o valor de retorno errado, o erro é levantado DEPOIS
//         });
//     });
// });

// Teste 3 - como fazer essa valudação do código assíncrono utilizando mocha? usando o argumento done

// describe('Math class', function () {
//     it('Sum two numbers', function (done) { // foi usado o function, pq o arrowfunction não permite utilizar o this, o que reduz as funções do mocha dentro do escopo
//         const math = new Math();
//         this.timeout(3000); // como estamos no escopo de função, o mocha permite alterar o valor máximo de timeout (default = 2000ms)

//         math.sum(5, 5, value => {
//             assert.equal(value, 10);
//             done(); // com o done, garantimos que o teste irá aguardar que a promise, async/await, chamada de callback, será concluída antes da avaliação
//         });
//     })

//     it('Multiply two numbers'); // O mocha permite que instanciemos testes que não serão executados ainda dentro do it
// });

// mocha não recomenda a utilização de arrowfunction.

// Teste 4 - Como executar apenas um teste dentro de uma estrutura com mais de um?

describe('Math class', function () {
    it('Sum two numbers', function (done) {
        const math = new Math();
        this.timeout(3000);

        math.sum(5, 5, value => {
            assert.equal(value, 10);
            done();
        });
    })

    it('Multiply two numbers', function () { // .only, executará apenas esse teste. .skip pula um teste
        const math = new Math();

        assert.equal(math.multiply(5, 5), 25);
    }); 
});

// Teste 5 - hooks, executa código e evita repetição
let value = 0;

describe('Math class', function() {
    beforeEach(function () { // hook, antes de cada função desse bloco eu rodo essa função, sem precisar se repetir
        value = 0;
    });

    it('Sum two numbers', function (done) {
        const math = new Math();
        this.timeout(3000);

        value = 5;

        math.sum(5, 5, value => {
            assert.equal(value, 10);
            done();
        });
    });

    it('Multiply two numbers', function () { // .only, executará apenas esse teste. .skip pula um teste
        const math = new Math();

        assert.equal(math.multiply(5, 5), 25);
    }); 
});

// Existem outros hooks - before (antes da execução de todo o código) - after - afterEach