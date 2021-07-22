import faker from 'faker'

const userCreator = () => ({
  name: faker.name.firstName(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
  id: faker.random.number(5),
})

const array = [...new Array(5)].map(() => userCreator())

array[0] = {
  ...array[0],
  name: 'Victor'
}
console.log(array)

const newArray = array.map(item => {
  if (item.id === 3) {
    return { ...item, name: 'Victor' }
  } else {
    return item
  }
})
console.log(newArray)


const index = array.findIndex(item => item.id === 3)
const newItem = {
  ...array[index],
  name: 'Victor'
}
const newerArray = [
  ...array.slice(0, index),
  newItem,
  ...array.slice(index)
]

console.log(newArray)


const persons = [{
  id: '1',
  name: 'John',
  age: 12
}, {
  id: '2',
  name: 'Tom',
  age: 13
}, {
  id: '3',
  name: 'David',
  age: 14
}];

function update(id, prop, val) {
  const person = persons.find(function (p) {
    return p.id === id;
  });

  if (person && person[prop]) {
    person[prop] = val;
  }
}

update('1', 'age', 77);

console.log(persons[0]);
