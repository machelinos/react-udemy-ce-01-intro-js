import heroes from '../../src/data/heroes'
import { getHeroByIdAsync } from '../../src/bases/09-promises'

describe('09-promises tests', () => {
  test('getHeroByIdAsync should return a hero', (done) => {
    const id = 1
    getHeroByIdAsync(heroes, id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: 'Batman',
        owner: 'DC',
      })
      done()
    })
  })

  test('getHeroByIdAsync must get an error if hero doesnt exist', (done) => {
    const id = 100
    let err = ''
    getHeroByIdAsync(heroes, id)
      .catch((e) => {
        err = e
      })
      .finally(() => {
        expect(err).toBe(`Could not find hero with id ${id}`)
        done()
      })
  })
})
