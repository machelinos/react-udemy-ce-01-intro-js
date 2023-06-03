import {
  findHeroById,
  findHeroesByOwner,
} from '../../src/bases/08-imports-exports'
import heroes from '../../src/data/heroes'

describe('08-imports-exports.js Tests', () => {
  test('findHeroById must return a hero with the id', () => {
    const id = 1
    const hero = findHeroById(heroes, id)

    expect(hero).toEqual({
      id: 1,
      name: 'Batman',
      owner: 'DC',
    })
  })
  test('findHeroById must return undefined when theres is no hero with the id specified', () => {
    const id = 100
    const hero = findHeroById(heroes, id)

    expect(hero).toBeFalsy()
  })

  test('findHeroesByOwner must return all heroes from DC', () => {
    const owner = 'DC'
    const heroesList = findHeroesByOwner(heroes, owner)

    expect(heroesList.length).toBe(3)
    expect(heroesList).toEqual([
      {
        id: 1,
        name: 'Batman',
        owner: 'DC',
      },
      {
        id: 3,
        name: 'Superman',
        owner: 'DC',
      },
      {
        id: 4,
        name: 'Flash',
        owner: 'DC',
      },
    ])
  })

  test('findHeroesByOwner must return all heroes from Marvel', () => {
    const owner = 'Marvel'
    const heroesList = findHeroesByOwner(heroes, owner)
    expect(heroesList).toHaveLength(2)
  })
})
