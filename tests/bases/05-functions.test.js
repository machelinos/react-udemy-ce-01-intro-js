import { getActiveUser, getUser } from '../../src/bases/05-functions'

describe('05-functions.js tests', () => {
  test('getUser must return an object', () => {
    const testUser = { uid: '123', username: 'machelinos' }
    const user = getUser()

    expect(testUser).toEqual(user)
  })

  test('getActive User must return an object', () => {
    const name = 'Joy'

    const activeUserTest = {
      uid: 'abc121',
      username: name,
    }

    const activeUser = getActiveUser(name)

    expect(activeUserTest).toEqual(activeUser)
  })
})
