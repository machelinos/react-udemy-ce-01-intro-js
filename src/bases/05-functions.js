const sayHi = (name) => `Hi ${name}`

console.log(sayHi('Taylor'))

export const getUser = () => ({ uid: '123', username: 'machelinos' })

console.log(getUser())

export const getActiveUser = (name) => ({
  uid: 'abc121',
  username: name,
})

console.log(getActiveUser('Joy'))
