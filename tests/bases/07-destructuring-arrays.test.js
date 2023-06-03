import { testUseState } from '../../src/bases/07-destructuring-arrays'

describe('07-destructuring-arrays.js Tests', () => {
  test('testUseState should return a tupple with a string and a function', () => {
    const name = 'Joy'
    const [letters, fn] = testUseState(name)

    expect(letters).toEqual(expect.any(String))
    expect(typeof fn).toBe('function')
  })
})
