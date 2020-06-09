// Função simples
function log(value) {
    console.log(value)
}

log('teste')

// Função anônima antes do ES6, precisava estar atribuída a uma variável ou passada como parâmetro para outras funções
var log1 = function (value) {
    console.log(value)
}
log1('teste2')

// Retorno

var sumOld = function (a, b) {
    return a + b
}
console.log(sumOld(5, 10));

// Com o surgimento do ES6, surgiram as Arrow Functions =>, também precisam estar atribuídas à variáveis ou passadas como parâmetro

var sum2 = (a, b) => a + b // sempre que for apenas retornar uma expressão, não é necessário usar return, mas caso exista uma expressão maior, com condições etc, é preciso usar chaves e o return

console.log(sum2(5, 5));

// OU

var sum3 = a => a + 5; // se existir APENAS um argumento, podemos omitir os parênteses

// Declaração de objeto literal no JS

var objTest = {
    test: '123'
}

console.log(objTest)

// Realizar return implícito de um objeto literal

var createObj = () => ({ test: 'testando' });

console.log(createObj())

// Outra forma de construir objetos no JS é através de funções construtoras:

function Car() {
    this.foo = 'bar'
}

console.log(new Car()) // usando o new, criamos um objeto através dessa função

// no entanto não podemos fazer o mesmo utilizando arrow functions

var CarArrow = () => {
    this.foo = 'car 2'
}

//console.log(new CarArrow())  // não funciona como função construtora

// Característica de hoisting (funções e variáveis criadas com var são içadas para o topo da execução do código):

logHoisting('teste de hoisting') // podemos invocar antes de criar a função

function logHoisting(value) {
    console.log(value)
}

// Não podemos fazer a mesma coisa com Arrow Functions

// logHoistArrow('teste de hoisting arrow') // irá retornar um erro

var logHoistArrow = value => {
    console.log(value)
}

// Além da forma mais enxuda de escrever no Arrow Function, existem outras coisas que diferenciam elas das funções clássicas. A sua vantagem é 

var objNew = {
    showContext: function showContext() {
        console.log(this);
    },
    log: function log(value) {
        console.log(value);
    }
}

objNew.showContext(); 
// o Objeto loga a si mesmo, faz referência a si mesmo, o this dentro do método está referenciando ao próprio objeto,
// porque as funções no JS tem contextos de invocação, elas são executadas no contexto onde são invocadas. Só olhar 
// para o lado esquerdo da invocação que já sabemos qual o objeto ao qual o método está se relacionando.
var objNewThis = {
    showContext: function showContext() {
        this.log('test') // até aqui o método this executa a referência
    },
    log: function log(value) {
        console.log(value);
    }
}

objNewThis.showContext()

// This com SetTimeout

var objNewThisTime = {
    showContext: function showContext() {
        this.log('test'); // até aqui o método this executa a referência

        setTimeout(function() {
            console.log(this);
        }.bind(this), 1000); // para resolver o erro, usaríamos o .bind(this), que fixa o contexto da função. O problema é que acaba 'verboso' e pode induzir a erros de escrita, esquecer um .bind(). Outro método era armazenar o contexto em outra variável.
    },
    log: function log(value) {
        console.log(value);
    }
}

objNewThisTime.showContext()

// para acabar com essas dificuldades que entra a utilização das Arrow Functions:

// a arrow function possui um contexto que é igual ao código que envolve ele, tudo entre as chaves, se referencia a ele mesmo, contexto léxico

var objArrow = {
    showContext: function showContext() {
        setTimeout(() => {
            console.log('after 1000ms');
        }, 1000); // usando a arrow function aqui eliminamos o problema de contexto.
    },
    log: function log(value) {
        console.log(value);
    }
}

objArrow.showContext()