const characters = ['Buffy', 'Willow', 'Giles', 'Xander']
const [slayer, bf, father, human] = characters
console.log(slayer, father, bf, human)

const testUseState = (name) => {
  return [name, (name) => console.log(`Hello ${name}`)]
}
const [name, setName] = testUseState(slayer)
console.log(name)

setName(bf)
