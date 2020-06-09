const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 10
    },
    {
        name: 'miau',
        type: 'cat',
        age: 1
    },
    {
        name: 'glub',
        type: 'fish',
        age: 2
    }
]

console.log(pets) // retorna o array criado

// Filtrar somente os pets com menos de 5 anos

const newPets = pets.filter((pet) => {
    return pet.age < 5
}); // Gera nova array sem alterar a primeira

// Reduzindo a função em pedaços que possam ser reutilizados

const menorQueCinco = (numero) => {
    return numero < 5
}

// Nova filtragem usando a função menorQueCinco()
const newPets = pets.filter((pet) => {
    return menorQueCinco(pet.age)
});

// Reduzindo mais a sintaxe:
const newPets = pets.filter((pet) => menorQueCinco(pet.age));

// Reduzindo ainda mais:
const newPets = pets.filter(({ age }) => menorQueCinco(age));


console.log(newPets)