// Enhanced Object Literal

// Maneira clássica:

var objClassic = {
    prop1: 'Primeira propriedade'
};
console.log(objClassic);

// Outra maneira:

var prop1 = 'Propriedade';

var objClassic2 = {
    prop1: prop1
}; // o problema desse método é que acaba havendo uma redundância, no ES6 isso muda, pois podemos ocultar o lado direito
console.log(objClassic2);

// ES6:

var prop2 = 'Propriedade 2';

var objES6 = {
    prop2
};

console.log(objES6);

// O mesmo pode ser feito para funções, para consumir métodos

function method1() {
    console.log('method called')
}

var objFn = {
    method1
};

objFn.method1();

// Outra forma de construir métodos

var objMethod = {
    sum: function sum(a, b) { // aqui também poderíamos inserir uma arrow function
        return a + b
    }
};

var objMethodArrow = {
    sum: (a, b) => a + b // aqui também poderíamos inserir uma arrow function
};

console.log(objMethod.sum(10,10))

console.log(objMethodArrow.sum(10,15))

// Outra capacidade para encurtar a forma de escrever os objetos literais:

var objAnother = {
    sum(a, b) { // podemos ocultar
        return a + b;
    }
}

console.log(objAnother.sum(10,12))

// Outro caso comum é quando queremos utilizar uma variável como nome de uma propriedade, obrigatoriamente devemos declarar o objeto literal e assim atribuir a variável como key

var propName = 'propName'

var obj = {}

obj[propName] = 'value' // podemos também brincar com o nome da propriedade dentro dos colchetes, concatenando, etc.

console.log(obj)
// O problema é que precisamos declarar o objeto antes e fazer a definição posteriormente. O ES6 permite fazer essa atribuição diretamente.

var propName2 = 'propName2'

var objEchma = {
    [`${propName2}Atributo`]: 'valueTest'
}

console.log(objEchma)
