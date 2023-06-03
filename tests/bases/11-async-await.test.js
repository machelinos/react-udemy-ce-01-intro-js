import { getImagen } from '../../src/bases/11-async-await'

describe('11-async-await Tests', () => {
  test('getImagen should return an url string', async () => {
    const url = await getImagen()
    expect(typeof url).toBe('string')
  })
})
