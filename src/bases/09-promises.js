import { findHeroById } from './08-imports-exports'
import heroes from '../data/heroes'

/* const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const hero = findHeroById(heroes, 2)
    resolve(hero)
  }, 2000)
})

promise.then((hero) => {
  console.log(hero)
}) */

const getHeroByIdAsync = (heroes, id) => {
  return new Promise((resolve, reject) => {
    const hero = findHeroById(heroes, id)
    if (hero) {
      resolve(hero)
    } else {
      reject(`Could not find hero with id ${id}`)
    }
  })
}

getHeroByIdAsync(heroes, 3).then(console.log).catch(console.warn)
