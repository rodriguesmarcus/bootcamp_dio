// Rest e Spread Operators
function sum(a, b) {
    return a + b;
}

console.log(sum(5, 5))

// E se eu quisesse passar um número indefinido de argumentos e retornar a soma dos mesmos?
// Método antigo:

function sumOld(a, b) {
    var value = 0;

    for (var i = 0; i < arguments.length; i++) {
        value += arguments[i];
    }
    return value
}
;
console.log(sumOld(5, 4, 12, 32, 4, 1, 2, 4, 5, 6, 6, 41, 2)); // embora funcione é uma maneira imperativa

// O ES6 trouxe o rest operator: '...' representado por três pontos, logo em seguida você define um valor para sua variável:

function sumRest(...args) { // além de trazer uma lista, ele trás os métodos de array para manipular os argumentos
    return args.reduce((acc, value) => acc + value, 0)
};

console.log(sumRest(5, 4, 12, 32, 4, 1, 2, 4, 5, 6, 6, 41, 2));

// Outro ponto importante é que o rest operator pode ser utilizado para "pegar" os argumentos restantes da função:

const sumRest2 = (a, b, ...rest) => {
    console.log(a, b, rest)
};

console.log(sumRest2(5, 4, 12, 32, 4, 1, 2, 4, 5, 6, 6, 41, 2));
// ex:               a, b,|            array rest            |

// Outro exemplo, se eu quisesse passar todas os argumentos da função soma para a função multiplicar? usamos o spread operator '...'

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

const sumRest3 = (...rest) => {
    multiply(...rest);
};

console.log(sumRest3(5, 5, 5, 2, 3));

// rest e spread operators funcionam em strings, arrays, objects e objetos iteráveis

const str = 'Digital Innovation One';

function logArgs(...args) {
    console.log(args);
}

logArgs(...str); // uso de spread, quebra a frase em caracteres e retorna uma array

// Outro casodo uso de spread

const arr = [1, 2, 3, 4]

function logArr() {  // poderíamos também inserir parâmetros definidos
    console.log(arguments)
}

logArr(...arr);

// spread operator também pode ser utilizado para construir arrays

// const arr2 = [5, 6, 7, 8].concat(arr) // uma das formas mais comuns
const arr2 = [...arr, 5, 6, 7, 8] // usando spread para construir arrays

console.log(arr2)

const arr3 = [...arr2, ...arr, 0, 0, 0] // pode ser usado para gerar, combinar, clonar

console.log(arr3)

const arrClone = [...arr]

console.log(arrClone)

// Outra forma é utilizando objetos literais e só podem ser utilizados para construir novos objetos

const objLit = {
    test: 123
}

const objLit2 = {
    ...objLit, // não podemos utilizar o spread num objeto para construir uma array
    test2: 321
}

const objLit3 = {
    ...objLit,
    test: 456 // como aqui eu estou sobrescrevendo uma chave existente, o último valor irá prevalecer.
}

const objMerged = {
    ...objLit,
    ...objLit2,
    ...objLit3
}

console.log(objMerged)

// Se referenciarmos um objeto em outro, ao alterarmos alguma propriedade do novo objeto, sua referência também será modificada
// ter cuidado com Shallow Clone (clone raso):

const obj = {
    test:123,
    subObj: {
        test: 123
    }
};

const obj2 = { ...obj, subObj:{...obj.subObj}}  // se não criarmos também o subObj, qualquer alteração que fizermos no obj2 refletirá no obj, já que esse é um caso de clone raso
                                                // ou seja, o obj2 sem referenciar o subobjeto só herda para si o primeiro nível do obj, mantendo a referencia do subObj

obj2.subObj.test = 444;

console.log(obj)
console.log(obj2)