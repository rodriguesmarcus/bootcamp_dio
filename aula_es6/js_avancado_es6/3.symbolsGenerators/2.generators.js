// Introdução à generators
// Generators são funções com pausa e 'despausam' e retornam valores através da interface de iteração

const uniqueId = Symbol(); // não pode ser invocado utilizando new

// Well Known Symbols:

Symbol.iterator

const arr = [1, 2, 3, 4];

const str = 'Marcus Vinicius Rodrigues'

const obj = {
    value: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++;

                return {
                    value: this.value[i - 1],
                    done: i > this.value.length
                }
            }
        }
    }
}

function hello() {
    console.log('hello');
    console.log('from');
    console.log('function');
}

hello()

// mas se quiséssemos inserir pausas entre casa console? Usando generators, basta colocar * e inserir yield entre os logs

function* hello2() {
    console.log('hello');
    yield; // para retornar um value na estrutura de retorno basta adicionar o índice ao yield

    console.log('from');
    yield;

    console.log('function');
}

const it = hello2(); // gera uma estrutura similar aos iteradores, mas gera undefined { value: undefined, done: false}


console.log(it.next());
console.log(it.next());
console.log(it.next()); // é possível receber valores de fora da função para dentro, será retornado o valor no yield

function* hello3() {
    console.log('hello');
    yield 1; // para retornar um value na estrutura de retorno basta adicionar o índice ao yield

    console.log('from');
    const value = yield 2; // o yield trará o valor de fora da função para a variável value que será consumida em seguida. 

    console.log(value);
}

const it2 = hello3(); // gera uma estrutura similar aos iteradores, mas gera undefined { value: undefined, done: false}


console.log(it2.next());
console.log(it2.next());
console.log(it2.next('outside')); // é possível receber valores de fora da função para dentro, será retornado o valor no yield

// o generator permite que além de pausar a execução, enviar dados para que a função execute de forma diferente

function* narutalNumbers() {
    let number = 0;
    while (true) { 
        yield number;
        number++;
    }
}

const itNatural = narutalNumbers();

console.log(itNatural.next());
console.log(itNatural.next());
console.log(itNatural.next());

// podemos usar essa função para criar um loop com números infinitos, mas podemos percorrê-los somente quando acharmos necessário, graças
// à sua propriedade de 'pausa' da função.

// Posso utilizar então o Generator para gerar/construir a interface de iteração dos meus objetos iteráveis:

const arrGn = [1, 2, 3, 4];

const strGn = 'Marcus Vinicius Rodrigues'

const objGn = {
    value: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for (let i = 0; i< this.value.length; i++){
            yield this.value[i]
        }
    }
}
for (let value of objGn){
    console.log(value)
}

// Existem bibliotecas que utilizaram generators para lidar com coisas assíncronas, a função manda uma Promise para fora
// A biblioteca resolve e retorna o valor como, reduxSaga (no ReactJS).

// Além de ser uma função por pausa, o que já é bastante vantajoso, podemos usar os generators para transformar meu objeto
// em iterável de forma mais fácil