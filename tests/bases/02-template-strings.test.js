import { getGreeting } from '../../src/bases/02-template-strings'

describe('Testing 02-template-strings.js', () => {
  test('getGreeting should return "Hello Joy"', () => {
    const name = 'Joy'

    const greeting = getGreeting(name)

    expect(greeting).toBe('Hello Joy')
  })
})
