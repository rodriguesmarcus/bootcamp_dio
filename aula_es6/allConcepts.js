const pets = [
    {
        type: 'dog',
        name: 'rex',
        age: 10,
        weigth: 30
    },
    {
        type: 'cat',
        name: 'gato',
        age: 10,
        weigth: 30
    },
    {
        type: 'dog',
        name: 'catioro',
        age: 10,
        weigth: 30
    },
    {
        type: 'cat',
        name: 'pechano',
        age: 10,
        weigth: 30
    },
    {
        type: 'fish',
        name: 'aquatico',
        age: 10,
        weigth: 30
    },
    {
        type: 'horse',
        name: 'cap. eduardo',
        age: 10,
        weigth: 30
    },
]

// Filtrando os dogs dentro dos pets.

const dogs = pets.filter((pet) =>{
    return pet.type === 'dog'
})

console.log(dogs)

// calculando os pesos dos cachorros depois da filtragem

const totalWeigth = dogs.reduce((total, pet) =>{
    return total + pet.weigth
}, 0)

console.log(totalWeigth)

// encadeando os conceitos

const totalWeigthDogs = pets
    .filter((pet)=>{
        return pet.type === 'dog'
    })
    .reduce((total,pet) => {
    return total + pet.weigth
    }, 0)

console.log(totalWeigthDogs)