// Como usar destructuring em ReactJS

var arr = ['apple', 'banana', 'orange', ['tomato']];

// como atribuir cada item para uma variável? método comum:

var apple = arr[0]
var banana = arr[1]
var orange = arr[2]
var tomato = arr[3][0]

// essa é uma forma extremamente verbosa e não prática, com o ES6 temos uma forma de escrever chamada destructuring assignment:

var [apple2, banana2, orange2, [tomato2]] = ['apple', 'banana', 'orange', ['tomato']] // já é uma melhora, mas 

console.log(tomato, tomato2)

// uma das coisas que é necessário se atentar quando usando destructuring em dois níveis é que a chave precisa relacionar com o valor
// caso um valor do nível baixo não exista, retornará apenas um undefined.

// O destructuring também pode ser utilizado de outras formas, como utilizá-lo em objetos

var obj = {
    name: 'marcus'
}

var name = obj.name; // método convencional
console.log(name)

// Destructuring assignment

var { name: name2 } = obj;

console.log(name2)

// o importante ao trabalhar com objetos literais E o destructuring é se atentar que diferente do array em que definimos o nome da variável
// com objetos, se quisermos definir o nome da variável precisamos utilizar outra forma de escrita: { name: name2 }
// quando você faz o destructuring você não mantém o vínculo com o objeto

// Outro exemplo, destructuring de objetos aninhados:

var obj2 = {
    name: 'marcus',
    props: {
        age: 27,
        favoriteColors: ['black', 'yellow']
    }
};

// método antigo:
var age = obj2.props.age;
var color1 = obj2.props.favoriteColors[0]
var color2 = obj2.props.favoriteColors[1]

// destructuring assignment
var { props: { age: age2, favoriteColors: [color1d, color2d] } } = obj2; // destructuring de multiníveis

console.log(age, age2, color1, color1d, color2, color2d)

// Objetos dentro de arrays

var arr2 = [{ nameFruit: 'apple', type: 'fruit' }];

// método convencional:
var fruit = arr2[0].nameFruit;
console.log(fruit)

// destructuring assignment:
var [{ nameFruit: nameFruit2 }] = arr2;
console.log(nameFruit2)

// Onde podemos utilizar o destructuring? Na hora de definir uma variável e numa lista de argumentos de uma função:

function sum(arr) {
    return arr[0] + arr[1]
}

console.log(sum([2, 2]))

// destructuring assignment:
function sumDes([a, b] = []) {
    return a + b
}

console.log(sumDes([2, 2]))

// destructuring assignment + default values:
function sumDes2([a, b] = [0, 0]) {
    return a + b
}

console.log(sumDes2())

// o mesmo funciona com objetos
function sumObj({ a, b }) {
    return a + b
}

console.log(sumObj({a:2, b:2}))