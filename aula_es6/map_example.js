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
 * Garante consistência nos códigos e evita excesso de declaração
 * de variáveis dentro do programa.
 */

// Cria uma nova array para armazenar um dos atributos da mesma
const petNames = pets.map((pet) => {
    return pet.name
})

console.log(petNames) 

// console.log(pets);