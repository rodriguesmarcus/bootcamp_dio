// Introdução a Symbols e iterators

// antes do symbol existiam 6 tipos (aula de ES6 no Notion)
// symbols são uma maneira de gerar um identificador único

const uniqueId = Symbol(); // não pode ser invocado utilizando new

console.log(uniqueId);

// O valor do Symbol não é nenhum outro tipo, ele é simplesmente um identificador único
// Como utilizar?

const value1Id = Symbol('hello'); // o valor no symbol é só para marcação e debug, não altera nada na propriedade

// O symbol pode ser utilizado para gerar propriedades privadas (não que sejam inacessíveis), mas evita que ela
// seja acessada se forma não intencional

const obj = {
    [uniqueId]: 'hello'
    //_id: 'hello' // método antigo
};

console.log(obj); // retorna { [Symbol()]: 'hello' } // é uma forma de deixar claro pros outros desenvolvedores
// que essa propriedade não deve ser alterada

// Symbols possuem uma série de propriedades chamadas well known symbols:
// .iterator, .split, .toPrimitive, esses tipos podem ser utilizados para adicionar propriedades para o seu object

// Symbol.iterator
// Symbol.split
// Symbol.toStringTag

const arr = [1,2,3,4];

const it = arr[Symbol.iterator](); // transformou a array em um objeto iterável

while (true) {
    let {value, done} = it.next()
    if (done) {
        break;
    }
    console.log(value);
}
// o iterador é uma inteface para você consumir passo a passo uma lista ou uma estrutura de dados

// com o ES6 já não precisamos criar o iterador, basta usar o for of

for (let value of arr) {
    console.log(value);
}

// Podemos trabalhar da mesma forma com strings

const str = 'Marcus Vinicius Rodrigues'

for (let value of str) {
    console.log(value);
}

// posso usar o spread para gerar um novo array fazendo uma spread numa string ou num array

const arr2 = [...str, ...arr]

// Antes do ES6 não poderíamos fazer a mesma coisa com objetos, mas usando os well known symbols podemos ADICIONAR essa capacidade aos objetos
// Vamos focar no Symbol.iterator

// #1 começamos construindo nossa função iteradora em um objeto

const objIt = {
    value: [1,2,3,4],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++;
                return {
                    value: this.value[i-1],
                    done: i > this.value.length
                }
            }
        }
    }
}

// Agora podemos usar o for of
for (let value of objIt) {
    console.log(value);
}

// E fazer uma spread

const arr3 = [...objIt];

console.log(arr3)