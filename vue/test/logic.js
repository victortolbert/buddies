// const plants = require('../data/plants')

// const toxicPlants = plants.filter(plant => typeof plant.toxicity !== 'undefined')
// const nonToxicPlants = plants.filter(plant => typeof plant.toxicity === 'undefined')

const myArray = [
  { id: 0, name: "Jhon" },
  { id: 1, name: "Sara" },
  { id: 2, name: "Domnic" },
  { id: 3, name: "Bravo" }
];

// Find index of specific object using findIndex method.
const objIndex = myArray.findIndex((obj => obj.id === 1));

// Log object to Console.
console.log("Before update: ", myArray[objIndex])

// Update object's name property.
myArray[objIndex].name = "Laila"

// Log object to console again.
console.log("After update: ", myArray[objIndex])

const items = [
  { name: 'Rice', price: 5 },
  { name: 'Book', price: 20 },
  { name: 'Chicken', price: 10 },
  { name: 'Monitor', price: 100 },
]

const totalPrice = items.reduce((total, item) => {
  return total + item.price
}, 0)

console.log(totalPrice)

const people = [
  { name: 'Victor', age: 55 },
  { name: 'Paul', age: 55 },
  { name: 'Lili', age: 34 },
  { name: 'Rebeca', age: 33 }
]

const groupedByAge = people.reduce((groupedPeople, person) => {
  const age = person.age
  if (groupedPeople[age] == null) groupedPeople[age] = []
  groupedPeople[age].push(person)
  return groupedPeople
}, {})

console.log(groupedByAge)
