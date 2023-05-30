const user = {
  name: 'Tony',
  age: 43,
  identity: 'Iron man',
}

/* const { name, age, identity } = user
console.log(name)
console.log(age)
console.log(identity) */

const TestUseContext = ({ name, age, identity }) => {
  return {
    alias: identity,
    years: age,
    latlng: {
      lat: 123213.12,
      lng: 123.1212,
    },
  }
}

const {
  alias,
  years,
  latlng: { lat, lng },
} = TestUseContext(user)
console.log(alias, years, lat, lng)
