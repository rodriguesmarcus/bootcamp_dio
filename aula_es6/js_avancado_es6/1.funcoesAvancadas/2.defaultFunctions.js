// Defaul Function Arguments

function multiply(a, b) {
    return a * b
}

console.log(multiply(5, 5))

// Quando trabalhamos com funções é comum lidar com cenários atípicos, como esquecer de passar um parâmetro

console.log(multiply(2)) // retorna NaN (not a number), pois a função está multiplicando um número por um undefined

// Antigamente era comum setar um parâmetro como um operador lógico para garantir a funcionalidade

function multiplyL(a, b) {
    b = b || 1
    return a * b
}

console.log(multiplyL(1))

console.log(multiplyL(5, 0)) // Nesse caso retorna novamente o NaN, pois na estrutura lógica o 0 retornará um falso, pela tabela verdade do JS retornará o 1, criando uma aberração na nossa multiplicação

// Outra forma era recorrer a variação de tipo

function multiplyTypeof(a, b) {
    b = typeof b === 'undefined' ? 1 : b

    return a * b
}
// no entanto esse método é 'verboso', gera muitas linhas de códigos desnecessárias e confusas. 
console.log(multiplyTypeof(5))

// Com o surgimento do ES6 podemos atribuir valores padrão para o argumento, sem precisar de validação

function multiplyES6(a, b=1) {
    return a * b
}
// Esse método garante toda nossa funcionalidade de forma enxuta. Podemos configurar um default para todos os argumentos, e podemos usar um argumento como default de outro. A ordem é importante
// não podemos fazer func(a = b, b), apenas func(a, b = a). A variável precisa ser declarada antes de referenciá-la.
console.log(multiplyES6(5))

// Outra característica é a lazy evaluation

function randomNumber() {
    return (Math.random() * 10).toFixed(0);
}
console.log(randomNumber())

function multiplyLazy (a, b = randomNumber()) { // podemos também configurar o valor como o retorno de uma função
    return a * b
}

console.log(multiplyLazy(10)) // a função multiply só é invocada depois que a outra função é invocada sem o parâmetro. Isso garante que a função só vai ser executada no momento certo. 