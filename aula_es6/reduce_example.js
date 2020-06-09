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

const totalWeigth = pets.reduce((total, pet) => {
    return total+=pet.weigth
}, 0/** valorInicial*/)

console.log(`Peso total dos animais: ${totalWeigth} kg`)

// retornando mais informações utilizando o reduce em formato de um objeto

const totalObj = pets.reduce((total, pet) =>{
    return{
        totalAge: total.totalAge + pet.age,
        totalWeigth: total.totalWeigth + pet.weigth
    }
}, {totalAge:0, totalWeigth: 0})

console.log(totalObj)

// Se eu quiser somar os atributos de um único tipo

const dogWeigth = pets.reduce((total, pet)=>{
    if (pet.type !== 'dog') return total

    return total + pet.weigth
}, 0)

console.log(`Total do peso dos Cachorros: ${dogWeigth}`)