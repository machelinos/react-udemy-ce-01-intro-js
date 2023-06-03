// import heroes, { owners } from '../data/heroes' // default and named import

// console.log('Hello World!')

// console.log(owners)

export const findHeroById = (heroes, id) => {
  return heroes.find((hero) => hero.id === id)
}
// console.log(findHeroById(heroes, 3))

export const findHeroesByOwner = (heroes, owner) => {
  return heroes.filter((hero) => hero.owner === owner)
}

// console.log(findHeroesByOwner(heroes, 'Marvel'))
