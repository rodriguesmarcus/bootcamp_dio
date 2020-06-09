const pets = [
    {
        type: 'dog',
        name: 'rex',
        age: 10,
        weight: 30
    },
    {
        type: 'cat',
        name: 'gato',
        age: 10,
        weight: 30
    },
    {
        type: 'dog',
        name: 'catioro',
        age: 10,
        weight: 30
    },
    {
        type: 'cat',
        name: 'pechano',
        age: 10,
        weight: 30
    },
    {
        type: 'fish',
        name: 'aquatico',
        age: 10,
        weight: 30
    },
    {
        type: 'horse',
        name: 'cap. eduardo',
        age: 10,
        weight: 30
    },
]
/**
 * Map
 * Retornar um novo array com a mesma quantidade de elementos
 * que o array inicial. Caso um dos items não possua valor 
 * retorna undefined e não um erro.
 */

// Cria uma nova array para armazenar um dos atributos da mesma
const mapPetNames = pets.map((pet) => {
    return pet.name
})

console.log(mapPetNames) 

// console.log(pets);

/** 
 * forEach
 * Não retorna um novo array com a mesma quantidade de elementos
*/

const forEachPetNames = pets.forEach((pet) => {
    return pet.name
}) // retornará um undefined

console.log(forEachPetNames)

// para armazenarmos esses valores em uma array, caso seja necessário

const newForEachPetNames = []

pets.forEach((pet) => {
    newForEachPetNames.push(pet.name)
})

console.log(newForEachPetNames)

// o map com forEach requer um maior trabalho de referência entre
// funções