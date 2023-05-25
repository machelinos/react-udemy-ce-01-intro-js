const person = {
  name: 'Buffy',
  lastname: 'Summers',
  age: 43,
}

const person2 = { ...person }
person2.name = 'Anne'
console.log(person)
console.log({ person2 })
